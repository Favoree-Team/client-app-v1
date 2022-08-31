# Client Favoree app v1

## Getting Started

First, run the development server: (harus pakai yarn)

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Framework: Next.js
- Style component: Chakra UI
- State management: React Context
- Chatbot ??
- Api: Axios

## Start coding

Petama sebelum coding pastikan semua perubahan sudah di `commit`.
Jangan lupa jalankan `git pull` di branch `development`.

Kalau ada conflict, resolve manual di VSCode, kemudian di `push`.

## Documentation

Figma design : [Figma link](https://www.figma.com/file/dGAI7k3V8gbGcu5Xl2m2Ox/Favoree?node-id=7%3A38)

## Project Structure

| Directory       | Description                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------- |
| public          | contains static files such as index html, javascript library files, images, and other assets, etc. |
| pages           | contains a page on the application                                                                 |
| src/components  | contains reusable components                                                                       |
| src/containers  | contains components and consist of other component and they have logic inside it                   |
| src/config/lang | contains content in different language                                                             |
| src/context     | contains React's context that allows you to share data to any component                            |
| src/parts       | contains a smaller ui that can be reused, it can be part of a component                            |
| src/services    | contains files to connect with third parties                                                       |
| src/utils       | contains file like reusable function, assets etc                                                   |

## Architecture

Jika mau menambah component atau _containers_, tidak perlu membuat folder baru yang berisi `index.js`, langsung aja. Penamaan diawali huruf besar.

```txt
|__ components/
|   |__ Button
|        |__ index.js [TIDAK PERLU]
```

```txt
|__ components/
|   |__ Button.js   [OK]
```

## Convention Commit message

List convention:

- `feat` - new or add feature, update code, update content
- `chore` - perubahan yang tidak mengganti fitur ( update README.md, linter, handle typo, etc)
- `fix` - bug fix
- `docs` - create documentation, tapi sepertinya di FE tidak ada

Contoh :

```txt
feat: add homepage feature
chore: lint name function .....
```

Commit boleh kecil-kecil atau besar, bebas. Tidak ada rule yang strict.
