import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("https://cleanuri.com/api/v1/shorten", async ({ request }) => {
    await request.json() as { url: string };

    const shortenedUrl = `https://mocked-url.com/`;

    return HttpResponse.json({ result_url: shortenedUrl }, { status: 201 });
  }),
];
