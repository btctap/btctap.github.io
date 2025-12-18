const dict = {
  en: {
    language: "English",
    headline: "Free Bitcoin",
    subline: "Just for trying it out!",
    description:
      "We give away real satoshis so that you can learn using them as money within your community. A free web-based wallet will be created for you, just bookmark it and save your login/password. All we ask in return is that you try to pay with it in your favorite cafes. If an owner does not have a wallet, offer to send them a 'gift fund'. This will create a wallet for them too. Have fun with your new sats!",
    continue: "Please continue",
    api_offline_msg:
      "Could not connect to the wallet's API, please try again later",
    not_found: "404 - Page Not Found",
    not_found_subline: "The page you are looking for does not exist.",
    back_to_home: "Back to Home",
    help: "Help",
    error: "Error",
    error_subline: "Invalid response from the API, something is wrong.",
    no_nfc: "NFC tag not detected",
    version: "Version",
    commithash: "Commit Hash",
  },
  de: {
    language: "Deutsch",
    headline: "Kostenloser Bitcoin",
    subline: "Nur um es auszuprobieren!",
    description:
      "Wir verschenken echte Satoshis, damit Sie lernen können, sie in Ihrer Gemeinschaft als Geld zu verwenden. Eine kostenlose webbasierte Geldbörse wird für Sie erstellt; markieren Sie sie einfach und speichern Sie Ihren Login/Passwort. Alles, was wir im Gegenzug verlangen, ist, dass Sie versuchen, damit in Ihren Lieblingscafés zu bezahlen. Wenn ein Besitzer keine Geldbörse hat, bieten Sie an, ihm einen 'Geschenkkapital' zu senden. Das wird auch für ihn eine Geldbörse erstellen. Viel Spaß mit Ihren neuen Sats!",
    continue: "Bitte fahren Sie fort",
    api_offline_msg:
      "Es konnte keine Verbindung zur API der Wallet hergestellt werden. Bitte versuchen Sie es später erneut.",
    not_found: "404 - Seite nicht gefunden",
    not_found_subline: "Die gesuchte Seite existiert nicht.",
    back_to_home: "Zurück zur Startseite",
    help: "Hilfe",
    error: "Fehler",
    error_subline:
      "Ungültige Antwort von der API, irgendwas ist hier falsch gelaufen.",
    no_nfc: "NFC-Tag nicht erkannt",
    version: "Version",
    commithash: "Commit Hash",
  },
  es: {
    language: "Español",
    headline: "Bitcoin gratis",
    subline: "¡Solo para probarlo!",
    description:
      "Regalamos satoshis reales para que puedas aprender a usarlos como dinero dentro de tu comunidad. Se creará una billetera web gratuita para ti; simplemente guárdala como un marcador y guarda tu usuario/contraseña. Todo lo que pedimos a cambio es que intentes pagar con ella en tus cafeterías favoritas. Si un dueño no tiene una billetera, ofrécele enviarle un 'fondo de regalo'. Esto también creará una billetera para ellos. ¡Diviértete con tus nuevos sats!",
    continue: "Por favor, continúe",
    api_offline_msg:
      "No se pudo conectar a la API de la billetera, inténtelo nuevamente más tarde",
    not_found: "404 - Página no encontrada",
    not_found_subline: "La página buscada no existe.",
    back_to_home: "Volver al inicio",
    help: "Ayuda",
    error: "Error",
    error_subline: "Respuesta inválida de la API, algo está mal :/",
    no_nfc: "Etiqueta NFC no detectada",
    version: "Versión",
    commithash: "Commit Hash",
  },
  pt: {
    language: "Português",
    headline: "Bitcoin grátis",
    subline: "Apenas para experimentá-lo!",
    description:
      "Damos satoshis reais para que você possa aprender a usá-los como dinheiro dentro da sua comunidade. Uma carteira baseada na web gratuita será criada para você; basta marcá-la e salvar seu login/senha. Tudo o que pedimos em troca é que você tente pagar com ela em seus cafés favoritos. Se um proprietário não tiver uma carteira, ofereça enviar um 'fundo de presente'. Isso também criará uma carteira para eles. Divirta-se com seus novos sats!",
    continue: "Por favor, continue",
    api_offline_msg:
      "Não foi possível conectar à API da carteira. Tente novamente mais tarde.",
    not_found: "404 - Página não encontrada",
    not_found_subline: "A página solicitada não existe.",
    back_to_home: "Voltar à página inicial",
    help: "Suporte",
    error: "Erro",
    error_subline: "Resposta inválida da API, algo deu errado.",
    no_nfc: "Etiqueta NFC não detectada",
    version: "Versão",
    commithash: "Hash do Commit",
  },
  zh: {
    language: "中文",
    headline: "免费比特币",
    subline: "只是为了试试看！",
    description:
      "我们赠送真实的satoshi，让您可以在您的社区中学习如何将其作为货币使用。将为您创建一个免费的网络钱包，只需将其收藏并保存您的登录/密码。我们唯一的要求是您尝试在您最喜欢的咖啡馆用它支付。如果店主没有钱包，可以建议发送给他们一个“礼品基金”。这也会为他们创建一个钱包。享受您的新sats吧！",
    continue: "请继续",
    api_offline_msg: "无法连接到钱包的 API，请稍后重试。",
    not_found: "404 - 页面未找到",
    not_found_subline: "您要查找的页面不存在。",
    back_to_home: "返回首页",
    help: "支持",
    error: "错误",
    error_subline: "API的响应无效，出现异常。",
    no_nfc: "未检测到NFC标签",
    version: "版本",
    commithash: "提交哈希",
  },
  ja: {
    language: "日本語",
    headline: "無料のビットコイン",
    subline: "試してみるためだけに！",
    description:
      "私たちは、本物のサトシを配布し、あなたがコミュニティ内でそれらをお金として使うことを学べるようにしています。無料のウェブベースのウォレットがあなたのために作成されますので、それをブックマークしてログイン情報/パスワードを保存してください。お返しにお願いしたいのは、お気に入りのカフェでそれを使って支払ってみることです。オーナーがウォレットを持っていない場合は、「ギフトファンド」を送ることを提案してください。これにより、彼らのためにもウォレットが作成されます。新しいサトシと楽しんでください！",
    continue: "続けてください",
    api_offline_msg:
      "ウォレットのAPIに接続できませんでした。しばらくしてからもう一度お試しください。",
    not_found: "404 - ページが見つかりません",
    not_found_subline: "お探しのページは存在しません",
    back_to_home: "ホームに戻る",
    help: "ヘルプ",
    error: "エラー",
    error_subline: "APIからの無効な応答です。何かが間違っています",
    no_nfc: "NFCタグが検出されませんでした",
    version: "バージョン",
    commithash: "コミットハッシュ",
  },
  ru: {
    language: "Русский",
    headline: "Бесплатные биткоины",
    subline: "Просто, чтобы вы попробовали!",
    description:
      "Мы раздаем настоящие сатоши, чтобы вы могли научиться использовать их как деньги в вашем сообществе. Для вас будет создан бесплатный веб-кошелек; просто добавьте его в закладки и сохраните свой логин/пароль. Единственное, что мы просим взамен — попытаться расплатиться им в ваших любимых кафе. Если у владельца нет кошелька, предложите отправить ему «подарочный фонд». Это создаст кошелек для них, как и у вас. Наслаждайтесь вашими новыми сатоши!",
    continue: "Прошу продолжить",
    api_offline_msg:
      "Не удалось подключиться к API кошелька. Пожалуйста, попробуйте позже.",
    not_found: "404 - Страница не найдена",
    not_found_subline: "Страница, которую Вы ищете, не существует.",
    back_to_home: "Вернуться на главную",
    help: "Помощь",
    error: "Ошибка",
    error_subline: "Некорректный ответ от API, что-то пошло не так.",
    no_nfc: "NFC-метка не обнаружена",
    version: "Версия",
    commithash: "Хэш коммита",
  },
};

type NestedKeyOf<T> = {
  [K in keyof T & string]: T[K] extends object
    ? `${K}.${NestedKeyOf<T[K]>}`
    : K;
}[keyof T & string];

export type DictKey = NestedKeyOf<typeof dict.en>;

export const rawDict = JSON.parse(JSON.stringify(dict));

Object.entries(dict)
  .filter(([lang]) => lang !== "en")
  .map(([, langDict]) => {
    Object.entries(dict.en).map(([key, enVal]) => {
      if (langDict[key] === undefined) {
        langDict[key] = enVal;
      }
    });
  });

export default dict;
