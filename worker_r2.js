export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Manejar CORS (Para que tu web pueda comunicarse con el Worker)
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*", // En producción, cámbialo por tu dominio real
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (url.pathname === "/upload" && request.method === "POST") {
      try {
        // Validar clave de autorización
        const authKey = request.headers.get("X-Auth-Key");
        if (!authKey || authKey !== env.AUTH_KEY) {
          return new Response("Unauthorized", { status: 401, headers: corsHeaders });
        }

        const formData = await request.formData();
        const file = formData.get("file");
        const key = formData.get("key");

        if (!file || !key) {
          return new Response("Missing file or key", { status: 400, headers: corsHeaders });
        }

        // Subir al bucket R2 (El bucket debe estar vinculado al Worker con el nombre 'MY_BUCKET')
        await env.MY_BUCKET.put(key, file, {
          httpMetadata: { contentType: file.type },
        });

        const publicUrl = `${env.PUBLIC_DOMAIN}/${key}`;

        return new Response(JSON.stringify({ url: publicUrl }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      } catch (err) {
        return new Response(err.message, { status: 500, headers: corsHeaders });
      }
    }

    return new Response("Not Found", { status: 404, headers: corsHeaders });
  },
};
