export async function handler(event, context) {
  const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN_HERE";
  const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID_HERE";

  const msg = event.queryStringParameters.msg;
  if (!msg) {
    return {
      statusCode: 400,
      body: "메시지를 전달하지 않았습니다.",
    };
  }

  const url = `https://api.telegram.org/bot${7856120288:AAGsyLk3SLF38dNIvj2iG-4ZU4PXGrN0WAY}/sendMessage?chat_id=${5652400044}&text=${encodeURIComponent(msg)}`;

  try {
    const response = await fetch(url);
    const result = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
