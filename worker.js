
/**
 * TERRYNOVA backend starter for Cloudflare Workers.
 * Video generation is not connected yet.
 */
export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", {
        status: 405,
        headers: cors
      });
    }

    return Response.json({
      error: "Video generation is not connected yet.",
      message: "Provider integration is required."
    }, {
      status: 501,
      headers: cors
    });
  }
};
