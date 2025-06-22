{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf200
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red24\green25\blue27;\red246\green247\blue249;\red46\green49\blue51;
\red20\green67\blue174;\red162\green0\blue16;\red186\green6\blue115;\red77\green80\blue85;\red97\green3\blue173;
}
{\*\expandedcolortbl;;\cssrgb\c12549\c12941\c14118;\cssrgb\c97255\c97647\c98039;\cssrgb\c23529\c25098\c26275;
\cssrgb\c9412\c35294\c73725;\cssrgb\c70196\c7843\c7059;\cssrgb\c78824\c15294\c52549;\cssrgb\c37255\c38824\c40784;\cssrgb\c46275\c15294\c73333;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl400\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 s\cf4 \strokec4  && \cf2 \strokec2 data\cf4 \strokec4 .\cf2 \strokec2 url\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3       \cf5 \strokec5 let\cf4 \strokec4  \cf2 \strokec2 imgTag\cf4 \strokec4  = \cf6 \strokec6 '<img src="'\cf4 \strokec4  + \cf2 \strokec2 data\cf4 \strokec4 .\cf2 \strokec2 url\cf4 \strokec4  + \cf6 \strokec6 '" alt="'\cf4 \strokec4  + (\cf2 \strokec2 eventName\cf4 \strokec4  || \cf2 \strokec2 eventKey\cf4 \strokec4 ) + \cf6 \strokec6 '" style="max-width:100%;height:auto;">'\cf4 \strokec4 ;\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (\cf2 \strokec2 data\cf4 \strokec4 .\cf2 \strokec2 link\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf2 \strokec2 imgTag\cf4 \strokec4  = \cf6 \strokec6 '<a href="'\cf4 \strokec4  + \cf2 \strokec2 data\cf4 \strokec4 .\cf2 \strokec2 link\cf4 \strokec4  + \cf6 \strokec6 '" target="_blank">'\cf4 \strokec4  + \cf2 \strokec2 imgTag\cf4 \strokec4  + \cf6 \strokec6 '</a>'\cf4 \strokec4 ;\cb1 \
\cb3       \}\cb1 \
\cb3       \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 `<div style="text-align:center;padding:10px 0;background:#f8f8f8;">\cf4 \strokec4 $\{\cf2 \strokec2 imgTag\cf4 \strokec4 \}\cf6 \strokec6 </div>`\cf4 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf2 \strokec2 e\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf2 \strokec2 log\cf4 \strokec4 (\cf6 \strokec6 "Error fetching banner for "\cf4 \strokec4  + \cf2 \strokec2 context\cf4 \strokec4  + \cf6 \strokec6 ": "\cf4 \strokec4  + \cf2 \strokec2 e\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 ""\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf8 \cb3 \strokec8 // ============================\cf4 \cb1 \strokec4 \
\cf8 \cb3 \strokec8 // EMAIL SENDING FUNCTIONS\cf4 \cb1 \strokec4 \
\cf8 \cb3 \strokec8 // ============================\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf2 \strokec2 sendEntryConfirmationEmail\cf4 \strokec4 (\cf2 \strokec2 entryData\cf4 \strokec4 , \cf2 \strokec2 eventKey\cf4 \strokec4 , \cf2 \strokec2 eventName\cf4 \strokec4 , \cf2 \strokec2 entryNumber\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 subject\cf4 \strokec4  = \cf6 \strokec6 `\cf4 \strokec4 $\{\cf2 \strokec2 eventName\cf4 \strokec4 \}\cf6 \strokec6  - Entry #\cf4 \strokec4 $\{\cf2 \strokec2 entryNumber\cf4 \strokec4 \}\cf6 \strokec6  Confirmation`\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 artistName\cf4 \strokec4  = \cf2 \strokec2 entryData\cf4 \strokec4 .\cf2 \strokec2 artist\cf4 \strokec4  || \cf2 \strokec2 entryData\cf4 \strokec4 .\cf2 \strokec2 artistName\cf4 \strokec4  || \cf6 \strokec6 'Artist'\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 artistEmail\cf4 \strokec4  = \cf2 \strokec2 entryData\cf4 \strokec4 .\cf2 \strokec2 email\cf4 \strokec4  || \cf6 \strokec6 ''\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 category\cf4 \strokec4  = \cf2 \strokec2 entryData\cf4 \strokec4 .\cf2 \strokec2 category\cf4 \strokec4  || \cf6 \strokec6 'General'\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 booth\cf4 \strokec4  = \cf2 \strokec2 entryData\cf4 \strokec4 .\cf2 \strokec2 booth\cf4 \strokec4  || \cf2 \strokec2 entryData\cf4 \strokec4 .\cf2 \strokec2 boothLocation\cf4 \strokec4  || \cf6 \strokec6 ''\cf4 \strokec4 ;\cb1 \
\
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (!\cf2 \strokec2 artistEmail\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf7 \strokec7 Logger\cf4 \strokec4 .\cf2 \strokec2 log\cf4 \strokec4 (\cf6 \strokec6 "No artist email provided, skipping confirmation email"\cf4 \strokec4 );\cb1 \
\cb3       \cf5 \strokec5 return\cf4 \strokec4  \cf5 \strokec5 false\cf4 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 topBanner\cf4 \strokec4  = \cf2 \strokec2 getBannerHtml\cf4 \strokec4 (\cf2 \strokec2 eventKey\cf4 \strokec4 , \cf6 \strokec6 "ENTRY_CONFIRMATION_EMAIL_BANNER_TOP"\cf4 \strokec4 , \cf2 \strokec2 eventName\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 bottomBanner\cf4 \strokec4  = \cf2 \strokec2 getBannerHtml\cf4 \strokec4 (\cf2 \strokec2 eventKey\cf4 \strokec4 , \cf6 \strokec6 "ENTRY_CONFIRMATION_EMAIL_BANNER_BOTTOM"\cf4 \strokec4 , \cf2 \strokec2 eventName\cf4 \strokec4 );\cb1 \
\
\cb3     \cf5 \strokec5 let\cf4 \strokec4  \cf2 \strokec2 htmlBody\cf4 \strokec4  = \cf6 \strokec6 `\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf6 \cb3 \strokec6       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6     `\cf4 \strokec4 ;\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3     \cf2 \strokec2 htmlBody\cf4 \strokec4  += \cf2 \strokec2 topBanner\cf4 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 htmlBody\cf4 \strokec4  += \cf6 \strokec6 `\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf6 \cb3 \strokec6         <div style="padding: 20px; font-size:1.05em; color:#222;">\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <h1 style="color: #333; margin-top: 0; text-align: center;">Entry Confirmation</h1>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>Dear \cf4 \strokec4 $\{\cf2 \strokec2 artistName\cf4 \strokec4 \}\cf6 \strokec6 ,</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>Thank you for submitting your entry for <strong>\cf4 \strokec4 $\{\cf2 \strokec2 eventName\cf4 \strokec4 \}\cf6 \strokec6 </strong>.</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>Your entry number is: <strong>\cf4 \strokec4 $\{\cf2 \strokec2 entryNumber\cf4 \strokec4 \}\cf6 \strokec6 </strong>. Please collect your Entry Card at the Artist Support location. You or your helper will need your name and booth number to collect the card.</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <div style="background: #f0f0f0; padding: 15px; border-radius: 5px; margin-bottom: 20px;">\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <h2 style="color: #555; font-size: 1.2em; margin-top: 0;">Entry Details</h2>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>Category:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 category\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             \cf4 \strokec4 $\{\cf2 \strokec2 booth\cf4 \strokec4  ? \cf6 \strokec6 `<p><strong>Booth:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 booth\cf4 \strokec4 \}\cf6 \strokec6 </p>`\cf4 \strokec4  : \cf6 \strokec6 ''\cf4 \strokec4 \}\cb1 \
\cf6 \cb3 \strokec6           </div>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p style="text-align: center; margin-top: 30px; color: #666;">\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             Good luck!\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>Best regards,<br>\cf4 \strokec4 $\{\cf2 \strokec2 eventName\cf4 \strokec4 \}\cf6 \strokec6  Team</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         </div>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6     `\cf4 \strokec4 ;\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3     \cf2 \strokec2 htmlBody\cf4 \strokec4  += \cf2 \strokec2 bottomBanner\cf4 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 htmlBody\cf4 \strokec4  += \cf6 \strokec6 `</div>`\cf4 \strokec4 ;\cb1 \
\
\cb3     \cf7 \strokec7 MailApp\cf4 \strokec4 .\cf2 \strokec2 sendEmail\cf4 \strokec4 (\{\cb1 \
\cb3       \cf2 \strokec2 to\cf4 \strokec4 : \cf2 \strokec2 artistEmail\cf4 \strokec4 ,\cb1 \
\cb3       \cf2 \strokec2 subject\cf4 \strokec4 : \cf2 \strokec2 subject\cf4 \strokec4 ,\cb1 \
\cb3       \cf2 \strokec2 htmlBody\cf4 \strokec4 : \cf2 \strokec2 htmlBody\cf4 \cb1 \strokec4 \
\cb3     \});\cb1 \
\
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf5 \strokec5 true\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf2 \strokec2 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf2 \strokec2 log\cf4 \strokec4 (\cf6 \strokec6 "Error sending client confirmation email: "\cf4 \strokec4  + \cf2 \strokec2 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf5 \strokec5 false\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf8 \cb3 \strokec8 // --- Client Consent Confirmation Email ---\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf2 \strokec2 sendClientConfirmationEmail_\cf4 \strokec4 (\cf2 \strokec2 params\cf4 \strokec4 , \cf2 \strokec2 eventKey\cf4 \strokec4 , \cf2 \strokec2 eventName\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 subject\cf4 \strokec4  = \cf6 \strokec6 `\cf4 \strokec4 $\{\cf2 \strokec2 eventName\cf4 \strokec4 \}\cf6 \strokec6  - Your Consent Form Submission Details`\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 clientName\cf4 \strokec4  = \cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 clientName\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 clientEmail\cf4 \strokec4  = \cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 clientEmail\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 artistName\cf4 \strokec4  = \cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 artistName\cf4 \strokec4 ;\cb1 \
\
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 topBanner\cf4 \strokec4  = \cf2 \strokec2 getBannerHtml\cf4 \strokec4 (\cf2 \strokec2 eventKey\cf4 \strokec4 , \cf6 \strokec6 "CLIENT_EMAIL_BANNER_TOP"\cf4 \strokec4 , \cf2 \strokec2 eventName\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 bottomBanner\cf4 \strokec4  = \cf2 \strokec2 getBannerHtml\cf4 \strokec4 (\cf2 \strokec2 eventKey\cf4 \strokec4 , \cf6 \strokec6 "CLIENT_EMAIL_BANNER_BOTTOM"\cf4 \strokec4 , \cf2 \strokec2 eventName\cf4 \strokec4 );\cb1 \
\
\cb3     \cf5 \strokec5 let\cf4 \strokec4  \cf2 \strokec2 htmlBody\cf4 \strokec4  = \cf6 \strokec6 `\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf6 \cb3 \strokec6       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6     `\cf4 \strokec4 ;\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3     \cf2 \strokec2 htmlBody\cf4 \strokec4  += \cf2 \strokec2 topBanner\cf4 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 htmlBody\cf4 \strokec4  += \cf6 \strokec6 `\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf6 \cb3 \strokec6         <div style="padding: 20px;">\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <h1 style="color: #333; margin-top: 0; text-align: center;">Thank You for Your Submission!</h1>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>Dear \cf4 \strokec4 $\{\cf2 \strokec2 clientName\cf4 \strokec4 \}\cf6 \strokec6 ,</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>Thank you for submitting your consent form for your appointment with <strong>\cf4 \strokec4 $\{\cf2 \strokec2 artistName\cf4 \strokec4 \}\cf6 \strokec6 </strong> at \cf4 \strokec4 $\{\cf2 \strokec2 eventName\cf4 \strokec4 \}\cf6 \strokec6 .</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>Here are the details you submitted:</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <div style="background: #f0f0f0; padding: 15px; border-radius: 5px; margin-bottom: 20px;">\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <h2 style="color: #555; font-size: 1.2em; margin-top: 0;">Your Details</h2>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>Name:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 clientName\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>Date of Birth:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf7 \strokec7 DOB\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>Phone:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf7 \strokec7 Phone\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>Email:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 clientEmail\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>Address:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf7 \strokec7 FullAddress\cf4 \strokec4 .\cf2 \strokec2 replace\cf4 \strokec4 (\cf9 \strokec9 /\\n/\cf5 \strokec5 g\cf4 \strokec4 , \cf6 \strokec6 '<br>'\cf4 \strokec4 )\}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>Artist:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 artistName\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           </div>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <div style="background: #f0f0f0; padding: 15px; border-radius: 5px; margin-bottom: 20px;">\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <h2 style="color: #555; font-size: 1.2em; margin-top: 0;">Consent & Medical Information</h2>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>Age Confirmation (18+):</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 ageConfirm\cf4 \strokec4  === \cf6 \strokec6 'true'\cf4 \strokec4  ? \cf6 \strokec6 'Yes'\cf4 \strokec4  : \cf6 \strokec6 'No'\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>Risk Acknowledged:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 riskConfirm\cf4 \strokec4  === \cf6 \strokec6 'true'\cf4 \strokec4  ? \cf6 \strokec6 'Yes'\cf4 \strokec4  : \cf6 \strokec6 'No'\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>Liability Acknowledged:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 liabilityConfirm\cf4 \strokec4  === \cf6 \strokec6 'true'\cf4 \strokec4  ? \cf6 \strokec6 'Yes'\cf4 \strokec4  : \cf6 \strokec6 'No'\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>Media Release:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 mediaRelease\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>ID Photo:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 idPhotoUrl\cf4 \strokec4  ? \cf6 \strokec6 `<a href="\cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 idPhotoUrl\cf4 \strokec4 \}\cf6 \strokec6 ">View Photo</a>`\cf4 \strokec4  : \cf6 \strokec6 'No photo uploaded'\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>Medical Issues:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 noIssues\cf4 \strokec4  === \cf6 \strokec6 'true'\cf4 \strokec4  ? \cf6 \strokec6 'None'\cf4 \strokec4  : \cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 medicalIssues\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 medicalDetails\cf4 \strokec4  ? \cf6 \strokec6 `<p><strong>Medical Details:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 medicalDetails\cf4 \strokec4 \}\cf6 \strokec6 </p>`\cf4 \strokec4  : \cf6 \strokec6 ''\cf4 \strokec4 \}\cb1 \
\cf6 \cb3 \strokec6           </div>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <div style="background: #f0f0f0; padding: 15px; border-radius: 5px;">\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <h2 style="color: #555; font-size: 1.2em; margin-top: 0;">On The Day Confirmations</h2>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>Aftercare Advice Understood:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 aftercareAdvice\cf4 \strokec4  === \cf6 \strokec6 'true'\cf4 \strokec4  ? \cf6 \strokec6 'Yes'\cf4 \strokec4  : \cf6 \strokec6 'No'\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>Eaten Before Appointment:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 eatBefore\cf4 \strokec4  === \cf6 \strokec6 'true'\cf4 \strokec4  ? \cf6 \strokec6 'Yes'\cf4 \strokec4  : \cf6 \strokec6 'No'\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>Not Unwell:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 unwell\cf4 \strokec4  === \cf6 \strokec6 'true'\cf4 \strokec4  ? \cf6 \strokec6 'Yes'\cf4 \strokec4  : \cf6 \strokec6 'No'\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>No Alcohol/Drugs:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 noAlcohol\cf4 \strokec4  === \cf6 \strokec6 'true'\cf4 \strokec4  ? \cf6 \strokec6 'Yes'\cf4 \strokec4  : \cf6 \strokec6 'No'\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             <p><strong>Marketing Consent:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 marketingConsent\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           </div>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p style="text-align: center; margin-top: 30px; color: #666;">\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6             If you have any questions, please contact your artist or the event organizer.\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         </div>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6     `\cf4 \strokec4 ;\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3     \cf2 \strokec2 htmlBody\cf4 \strokec4  += \cf2 \strokec2 bottomBanner\cf4 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 htmlBody\cf4 \strokec4  += \cf6 \strokec6 `</div>`\cf4 \strokec4 ;\cb1 \
\
\cb3     \cf7 \strokec7 MailApp\cf4 \strokec4 .\cf2 \strokec2 sendEmail\cf4 \strokec4 (\{\cb1 \
\cb3       \cf2 \strokec2 to\cf4 \strokec4 : \cf2 \strokec2 clientEmail\cf4 \strokec4 ,\cb1 \
\cb3       \cf2 \strokec2 subject\cf4 \strokec4 : \cf2 \strokec2 subject\cf4 \strokec4 ,\cb1 \
\cb3       \cf2 \strokec2 htmlBody\cf4 \strokec4 : \cf2 \strokec2 htmlBody\cf4 \cb1 \strokec4 \
\cb3     \});\cb1 \
\
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf5 \strokec5 true\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf2 \strokec2 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf2 \strokec2 log\cf4 \strokec4 (\cf6 \strokec6 "Error sending client confirmation email: "\cf4 \strokec4  + \cf2 \strokec2 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf5 \strokec5 false\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf8 \cb3 \strokec8 // --- Aftercare Email (to client) ---\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf2 \strokec2 sendClientAftercareEmail_\cf4 \strokec4 (\cf2 \strokec2 params\cf4 \strokec4 , \cf2 \strokec2 eventKey\cf4 \strokec4 , \cf2 \strokec2 eventName\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 subject\cf4 \strokec4  = \cf6 \strokec6 `\cf4 \strokec4 $\{\cf2 \strokec2 eventName\cf4 \strokec4 \}\cf6 \strokec6  - Your Tattoo Aftercare Advice`\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 clientEmail\cf4 \strokec4  = \cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 clientEmail\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 artistName\cf4 \strokec4  = \cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 artistName\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 artistEmail\cf4 \strokec4  = \cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 artistEmail\cf4 \strokec4  || \cf6 \strokec6 'N/A'\cf4 \strokec4 ;\cb1 \
\
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 topBanner\cf4 \strokec4  = \cf2 \strokec2 getBannerHtml\cf4 \strokec4 (\cf2 \strokec2 eventKey\cf4 \strokec4 , \cf6 \strokec6 "AFTERCARE_EMAIL_BANNER_TOP"\cf4 \strokec4 , \cf2 \strokec2 eventName\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 bottomBanner\cf4 \strokec4  = \cf2 \strokec2 getBannerHtml\cf4 \strokec4 (\cf2 \strokec2 eventKey\cf4 \strokec4 , \cf6 \strokec6 "AFTERCARE_EMAIL_BANNER_BOTTOM"\cf4 \strokec4 , \cf2 \strokec2 eventName\cf4 \strokec4 );\cb1 \
\
\cb3     \cf5 \strokec5 let\cf4 \strokec4  \cf2 \strokec2 htmlBodyAftercare\cf4 \strokec4  = \cf6 \strokec6 `\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf6 \cb3 \strokec6       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6     `\cf4 \strokec4 ;\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3     \cf2 \strokec2 htmlBodyAftercare\cf4 \strokec4  += \cf2 \strokec2 topBanner\cf4 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 htmlBodyAftercare\cf4 \strokec4  += \cf6 \strokec6 `\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf6 \cb3 \strokec6         <div style="padding: 20px;">\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <h1 style="color: #333; margin-top: 0; text-align: center;">Your Tattoo Aftercare Guide</h1>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>Thank you for your trust in getting tattooed by <strong>\cf4 \strokec4 $\{\cf2 \strokec2 artistName\cf4 \strokec4 \}\cf6 \strokec6 </strong> at our event. Here's everything you need to know to keep your tattoo healing beautifully:</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">1. How Long To Leave Wrapped?</h2>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>There are numerous different coverings in use in the tattoo industry. Your artist will give you specific instructions.</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">2. Cleaning Your Tattoo</h2>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>Clean your tattoo every day with a clean hand, warm water, and a fragrance-free soap. Let it air dry or gently pat it dry with a clean towel. Showers are great but no sitting water.</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">3. Aftercare Products</h2>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>Apply a thin layer of recommended aftercare cream using a clean hand 3-4 times a day.</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">4. When To Cover Tattoo</h2>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>Cover your new tattoo when in a dirty environment to help avoid infection. Allow skin to breathe as much as possible.</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">5. Clean Clothes And Bedding</h2>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>Always use a clean towel whilst your tattoo is healing and allow it to air dry when possible. Keep clothes and bedding clean and fresh!</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">6. Avoid Standing Water</h2>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>Avoid soaking your tattoo for at least a week i.e. baths, swimming, dishwater. Running water such as showers are perfect.</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">7. Avoid UV Rays</h2>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>Avoid direct sunlight & sun beds for at least 2 weeks. Always use a strong sunblock to keep your tattoo at its best.</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">8. Do Not Pick Or Scratch</h2>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>Please do not pick or scratch your tattoo whilst it is healing. This can cause trauma to the skin and lead to scarring and infection.</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">9. Concerns or questions?</h2>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>The artist that applied your tattoo is responsible for any touch-ups, concerns, or ongoing advice.</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>Your artist for this tattoo was <strong>\cf4 \strokec4 $\{\cf2 \strokec2 artistName\cf4 \strokec4 \}\cf6 \strokec6 </strong><br>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           Contact: \cf4 \strokec4 $\{\cf2 \strokec2 artistEmail\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p>If you have any further questions or concerns, feel free to reply to this email or reach out directly to your artist.</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6           <p style="font-weight: bold; margin-top: 20px;">Happy healing!</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         </div>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6     `\cf4 \strokec4 ;\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3     \cf2 \strokec2 htmlBodyAftercare\cf4 \strokec4  += \cf2 \strokec2 bottomBanner\cf4 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 htmlBodyAftercare\cf4 \strokec4  += \cf6 \strokec6 `</div>`\cf4 \strokec4 ;\cb1 \
\
\cb3     \cf7 \strokec7 MailApp\cf4 \strokec4 .\cf2 \strokec2 sendEmail\cf4 \strokec4 (\{\cb1 \
\cb3       \cf2 \strokec2 to\cf4 \strokec4 : \cf2 \strokec2 clientEmail\cf4 \strokec4 ,\cb1 \
\cb3       \cf2 \strokec2 subject\cf4 \strokec4 : \cf2 \strokec2 subject\cf4 \strokec4 ,\cb1 \
\cb3       \cf2 \strokec2 htmlBody\cf4 \strokec4 : \cf2 \strokec2 htmlBodyAftercare\cf4 \cb1 \strokec4 \
\cb3     \});\cb1 \
\
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf5 \strokec5 true\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf2 \strokec2 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf2 \strokec2 log\cf4 \strokec4 (\cf6 \strokec6 "Error sending client aftercare email: "\cf4 \strokec4  + \cf2 \strokec2 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf5 \strokec5 false\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf8 \cb3 \strokec8 // --- Artist Consent Email (with full consent form details and banners) ---\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf2 \strokec2 sendArtistConsentDetailsEmail\cf4 \strokec4 (\cf2 \strokec2 params\cf4 \strokec4 , \cf2 \strokec2 eventKey\cf4 \strokec4 , \cf2 \strokec2 eventName\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 subject\cf4 \strokec4  = \cf6 \strokec6 `\cf4 \strokec4 $\{\cf2 \strokec2 eventName\cf4 \strokec4 \}\cf6 \strokec6  - Client Consent Details for \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 clientName\cf4 \strokec4 \}\cf6 \strokec6 `\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 artistEmail\cf4 \strokec4  = \cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 artistEmail\cf4 \strokec4 ;\cb1 \
\
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (!\cf2 \strokec2 artistEmail\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf7 \strokec7 Logger\cf4 \strokec4 .\cf2 \strokec2 log\cf4 \strokec4 (\cf6 \strokec6 "Artist email not provided, skipping artist consent details email."\cf4 \strokec4 );\cb1 \
\cb3       \cf5 \strokec5 return\cf4 \strokec4  \cf5 \strokec5 false\cf4 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 topBanner\cf4 \strokec4  = \cf2 \strokec2 getBannerHtml\cf4 \strokec4 (\cf2 \strokec2 eventKey\cf4 \strokec4 , \cf6 \strokec6 "ARTIST_CONSENT_DETAILS_EMAIL_BANNER_TOP"\cf4 \strokec4 , \cf2 \strokec2 eventName\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf2 \strokec2 bottomBanner\cf4 \strokec4  = \cf2 \strokec2 getBannerHtml\cf4 \strokec4 (\cf2 \strokec2 eventKey\cf4 \strokec4 , \cf6 \strokec6 "ARTIST_CONSENT_DETAILS_EMAIL_BANNER_BOTTOM"\cf4 \strokec4 , \cf2 \strokec2 eventName\cf4 \strokec4 );\cb1 \
\
\cb3     \cf5 \strokec5 let\cf4 \strokec4  \cf2 \strokec2 htmlBody\cf4 \strokec4  = \cf6 \strokec6 `\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf6 \cb3 \strokec6       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6     `\cf4 \strokec4 ;\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3     \cf2 \strokec2 htmlBody\cf4 \strokec4  += \cf2 \strokec2 topBanner\cf4 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 htmlBody\cf4 \strokec4  += \cf6 \strokec6 `\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf6 \cb3 \strokec6         <h1 style="color: #333; margin-top: 0; text-align: center;">Client Consent Details</h1>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p>Hello \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 artistName\cf4 \strokec4 \}\cf6 \strokec6 ,</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p>Your client has submitted a new consent form at \cf4 \strokec4 $\{\cf2 \strokec2 eventName\cf4 \strokec4 \}\cf6 \strokec6 .</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <h2 style="color: #555; font-size: 1.2em; margin-top: 20px;">Client Details</h2>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p><strong>Name:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 clientName\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p><strong>Email:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 clientEmail\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p><strong>Phone:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf7 \strokec7 Phone\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p><strong>Date of Birth:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf7 \strokec7 DOB\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p><strong>Address:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf7 \strokec7 FullAddress\cf4 \strokec4 .\cf2 \strokec2 replace\cf4 \strokec4 (\cf9 \strokec9 /\\n/\cf5 \strokec5 g\cf4 \strokec4 , \cf6 \strokec6 '<br>'\cf4 \strokec4 )\}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 idPhotoUrl\cf4 \strokec4  ? \cf6 \strokec6 `<p><strong>ID Photo:</strong> <a href="\cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 idPhotoUrl\cf4 \strokec4 \}\cf6 \strokec6 ">View Photo</a></p>`\cf4 \strokec4  : \cf6 \strokec6 ''\cf4 \strokec4 \}\cb1 \
\cf6 \cb3 \strokec6         <h2 style="color: #555; font-size: 1.2em; margin-top: 20px;">Consent & Medical Information</h2>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p><strong>Age Confirmation (18+):</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 ageConfirm\cf4 \strokec4  === \cf6 \strokec6 'true'\cf4 \strokec4  ? \cf6 \strokec6 'Yes'\cf4 \strokec4  : \cf6 \strokec6 'No'\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p><strong>Risk Acknowledged:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 riskConfirm\cf4 \strokec4  === \cf6 \strokec6 'true'\cf4 \strokec4  ? \cf6 \strokec6 'Yes'\cf4 \strokec4  : \cf6 \strokec6 'No'\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p><strong>Liability Acknowledged:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 liabilityConfirm\cf4 \strokec4  === \cf6 \strokec6 'true'\cf4 \strokec4  ? \cf6 \strokec6 'Yes'\cf4 \strokec4  : \cf6 \strokec6 'No'\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p><strong>Media Release:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 mediaRelease\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p><strong>Medical Issues:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 noIssues\cf4 \strokec4  === \cf6 \strokec6 'true'\cf4 \strokec4  ? \cf6 \strokec6 'None'\cf4 \strokec4  : \cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 medicalIssues\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 medicalDetails\cf4 \strokec4  ? \cf6 \strokec6 `<p><strong>Medical Details:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 medicalDetails\cf4 \strokec4 \}\cf6 \strokec6 </p>`\cf4 \strokec4  : \cf6 \strokec6 ''\cf4 \strokec4 \}\cb1 \
\cf6 \cb3 \strokec6         <h2 style="color: #555; font-size: 1.2em; margin-top: 20px;">On The Day Confirmations</h2>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p><strong>Aftercare Advice Understood:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 aftercareAdvice\cf4 \strokec4  === \cf6 \strokec6 'true'\cf4 \strokec4  ? \cf6 \strokec6 'Yes'\cf4 \strokec4  : \cf6 \strokec6 'No'\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p><strong>Eaten Before Appointment:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 eatBefore\cf4 \strokec4  === \cf6 \strokec6 'true'\cf4 \strokec4  ? \cf6 \strokec6 'Yes'\cf4 \strokec4  : \cf6 \strokec6 'No'\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p><strong>Not Unwell:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 unwell\cf4 \strokec4  === \cf6 \strokec6 'true'\cf4 \strokec4  ? \cf6 \strokec6 'Yes'\cf4 \strokec4  : \cf6 \strokec6 'No'\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p><strong>No Alcohol/Drugs:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 noAlcohol\cf4 \strokec4  === \cf6 \strokec6 'true'\cf4 \strokec4  ? \cf6 \strokec6 'Yes'\cf4 \strokec4  : \cf6 \strokec6 'No'\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p><strong>Marketing Consent:</strong> \cf4 \strokec4 $\{\cf2 \strokec2 params\cf4 \strokec4 .\cf2 \strokec2 marketingConsent\cf4 \strokec4 \}\cf6 \strokec6 </p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6         <p style="margin-top: 30px;">Thank you,<br>\cf4 \strokec4 $\{\cf2 \strokec2 eventName\cf4 \strokec4 \}\cf6 \strokec6  Team</p>\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6     `\cf4 \strokec4 ;\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3     \cf2 \strokec2 htmlBody\cf4 \strokec4  += \cf2 \strokec2 bottomBanner\cf4 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 htmlBody\cf4 \strokec4  += \cf6 \strokec6 `</div>`\cf4 \strokec4 ;\cb1 \
\
\cb3     \cf7 \strokec7 MailApp\cf4 \strokec4 .\cf2 \strokec2 sendEmail\cf4 \strokec4 (\{\cb1 \
\cb3       \cf2 \strokec2 to\cf4 \strokec4 : \cf2 \strokec2 artistEmail\cf4 \strokec4 ,\cb1 \
\cb3       \cf2 \strokec2 subject\cf4 \strokec4 : \cf2 \strokec2 subject\cf4 \strokec4 ,\cb1 \
\cb3       \cf2 \strokec2 htmlBody\cf4 \strokec4 : \cf2 \strokec2 htmlBody\cf4 \cb1 \strokec4 \
\cb3     \});\cb1 \
\
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf5 \strokec5 true\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf2 \strokec2 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf2 \strokec2 log\cf4 \strokec4 (\cf6 \strokec6 "Error sending artist consent details email: "\cf4 \strokec4  + \cf2 \strokec2 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf5 \strokec5 false\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
}