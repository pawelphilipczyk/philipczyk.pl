import { html } from "remix/html-template";

export default function Index() {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>philipczyk.pl</title>
      </head>
      <body>
        <main>
          <h1>Welcome to philipczyk.pl</h1>
          <nav>
            <a href="/">Home</a>
            <a href="https://github.com/pawelphilipczyk">Github</a>
          </nav>
        </main>
      </body>
    </html>
  `;
}
