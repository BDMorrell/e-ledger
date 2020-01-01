# Front-end notes
* Don't use innerText if you can help it; that'll force a relayout. Instead, use textContents.

# Server notes
* Sanitize JSON text fields, they may have HTML.
* Carefully consider [express security tips](https://expressjs.com/en/advanced/best-practice-security.html).