{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf200
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red77\green80\blue85;\red246\green247\blue249;\red46\green49\blue51;
\red20\green67\blue174;\red24\green25\blue27;\red162\green0\blue16;\red186\green6\blue115;}
{\*\expandedcolortbl;;\cssrgb\c37255\c38824\c40784;\cssrgb\c97255\c97647\c98039;\cssrgb\c23529\c25098\c26275;
\cssrgb\c9412\c35294\c73725;\cssrgb\c12549\c12941\c14118;\cssrgb\c70196\c7843\c7059;\cssrgb\c78824\c15294\c52549;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl400\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // === MAIN ENTRY POINTS & ROUTING (FIXED VERSION WITH JSON VARIANTS) ===\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 doGet\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 handleRequest_\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 , \cf7 \strokec7 "GET"\cf4 \strokec4 );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 doPost\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 handleRequest_\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 , \cf7 \strokec7 "POST"\cf4 \strokec4 );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 handleRequest_\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 , \cf6 \strokec6 method\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 action\cf4 \strokec4  = (\cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4  && \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 action\cf4 \strokec4 ) ||\cb1 \
\cb3                  (\cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 postData\cf4 \strokec4  && \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 postData\cf4 \strokec4 .\cf6 \strokec6 contents\cf4 \strokec4  && \cf8 \strokec8 JSON\cf4 \strokec4 .\cf6 \strokec6 parse\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 postData\cf4 \strokec4 .\cf6 \strokec6 contents\cf4 \strokec4 ).\cf6 \strokec6 action\cf4 \strokec4 );\cb1 \
\
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 method\cf4 \strokec4  === \cf7 \strokec7 "OPTIONS"\cf4 \strokec4 ) \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 doOptions\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 );\cb1 \
\
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 routes\cf4 \strokec4  = \{\cb1 \
\cb3       \cf2 \strokec2 // --- ENTRIES ---\cf4 \cb1 \strokec4 \
\cb3       \cf7 \strokec7 "addEntry"\cf4 \strokec4 : \cf6 \strokec6 addEntry\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "updateEntry"\cf4 \strokec4 : \cf6 \strokec6 updateEntry\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "deleteEntry"\cf4 \strokec4 : \cf6 \strokec6 deleteEntry\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "getEntries"\cf4 \strokec4 : \cf6 \strokec6 getEntries\cf4 \strokec4 ,\cb1 \
\
\cb3       \cf2 \strokec2 // --- ARTISTS ---\cf4 \cb1 \strokec4 \
\cb3       \cf7 \strokec7 "addArtist"\cf4 \strokec4 : \cf6 \strokec6 addArtist\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "deleteArtist"\cf4 \strokec4 : \cf6 \strokec6 deleteArtist\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "uploadArtistList"\cf4 \strokec4 : \cf6 \strokec6 uploadArtistList\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "clearArtistList"\cf4 \strokec4 : \cf6 \strokec6 clearArtistList\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "getArtistList"\cf4 \strokec4 : \cf6 \strokec6 getArtistList\cf4 \strokec4 ,\cb1 \
\
\cb3       \cf2 \strokec2 // --- JUDGES ---\cf4 \cb1 \strokec4 \
\cb3       \cf7 \strokec7 "addJudge"\cf4 \strokec4 : \cf6 \strokec6 addJudgeJSON\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "addJudgeJSON"\cf4 \strokec4 : \cf6 \strokec6 addJudgeJSON\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "deleteJudge"\cf4 \strokec4 : \cf6 \strokec6 deleteJudgeJSON\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "deleteJudgeJSON"\cf4 \strokec4 : \cf6 \strokec6 deleteJudgeJSON\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "getJudges"\cf4 \strokec4 : \cf6 \strokec6 getJudges\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "getJudgeToken"\cf4 \strokec4 : \cf6 \strokec6 getJudgeTokenJSON\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "generateToken"\cf4 \strokec4 : \cf6 \strokec6 generateTokenJSON\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "getJudgeTokenJSON"\cf4 \strokec4 : \cf6 \strokec6 getJudgeTokenJSON\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "generateTokenJSON"\cf4 \strokec4 : \cf6 \strokec6 generateTokenJSON\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "sendJudgeLinkEmail"\cf4 \strokec4 : \cf6 \strokec6 sendJudgeLinkEmail\cf4 \strokec4 ,\cb1 \
\
\cb3       \cf2 \strokec2 // --- CATEGORIES ---\cf4 \cb1 \strokec4 \
\cb3       \cf7 \strokec7 "addCategory"\cf4 \strokec4 : \cf6 \strokec6 addCategoryJSON\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "addCategoryJSON"\cf4 \strokec4 : \cf6 \strokec6 addCategoryJSON\cf4 \strokec4 ,        \cf2 \strokec2 // Added: support for JSON variant\cf4 \cb1 \strokec4 \
\cb3       \cf7 \strokec7 "deleteCategory"\cf4 \strokec4 : \cf6 \strokec6 deleteCategoryJSON\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "deleteCategoryJSON"\cf4 \strokec4 : \cf6 \strokec6 deleteCategoryJSON\cf4 \strokec4 ,  \cf2 \strokec2 // Added: support for JSON variant\cf4 \cb1 \strokec4 \
\cb3       \cf7 \strokec7 "getCategories"\cf4 \strokec4 : \cf6 \strokec6 getCategories\cf4 \strokec4 ,\cb1 \
\
\cb3       \cf2 \strokec2 // --- CONSENT & CLIENT DATA ---\cf4 \cb1 \strokec4 \
\cb3       \cf7 \strokec7 "submitConsent"\cf4 \strokec4 : \cf6 \strokec6 submitConsent\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "deleteClient"\cf4 \strokec4 : \cf6 \strokec6 deleteClient\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "clearClientData"\cf4 \strokec4 : \cf6 \strokec6 clearClientData\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "importConsentClients"\cf4 \strokec4 : \cf6 \strokec6 importConsentClients\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "getClientData"\cf4 \strokec4 : \cf6 \strokec6 getClientData\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "exportClientData"\cf4 \strokec4 : \cf6 \strokec6 exportClientData\cf4 \strokec4 ,\cb1 \
\cb3       \cb1 \
\cb3        \cf2 \strokec2 // --- JUDGING/SCORES for FEEDBACK MODULE ---\cf4 \cb1 \strokec4 \
\cb3       \cf7 \strokec7 "getRawScores"\cf4 \strokec4 : \cf6 \strokec6 getRawScores\cf4 \strokec4 , \cf2 \strokec2 // <--- Just add this!\cf4 \cb1 \strokec4 \
\cb3       \cf7 \strokec7 "sendFeedbackReport"\cf4 \strokec4 : \cf6 \strokec6 sendFeedbackReport\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 "getEventData"\cf4 \strokec4 : \cf6 \strokec6 getEventData\cf4 \strokec4 ,\cb1 \
\cb3       \cf2 \strokec2 // --- LEADERBOARD & SPECIAL ---\cf4 \cb1 \strokec4 \
\cb3       \cf7 \strokec7 "getLeaderboard"\cf4 \strokec4 : \cf6 \strokec6 getLeaderboard\cf4 \cb1 \strokec4 \
\cb3     \};\cb1 \
\
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 action\cf4 \strokec4  && \cf6 \strokec6 routes\cf4 \strokec4 [\cf6 \strokec6 action\cf4 \strokec4 ]) \{\cb1 \
\cb3       \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 routes\cf4 \strokec4 [\cf6 \strokec6 action\cf4 \strokec4 ](\cf6 \strokec6 e\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf8 \strokec8 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf8 \strokec8 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 error\cf4 \strokec4 : \cf7 \strokec7 "Unknown or missing action parameter"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf8 \strokec8 ContentService\cf4 \strokec4 .\cf8 \strokec8 MimeType\cf4 \strokec4 .\cf8 \strokec8 JSON\cf4 \strokec4 );\cb1 \
\
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf8 \strokec8 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf7 \strokec7 "Error in handleRequest_: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf8 \strokec8 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf8 \strokec8 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 error\cf4 \strokec4 : \cf7 \strokec7 "API error: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf8 \strokec8 ContentService\cf4 \strokec4 .\cf8 \strokec8 MimeType\cf4 \strokec4 .\cf8 \strokec8 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 doOptions\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf8 \strokec8 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 ""\cf4 \strokec4 )\cb1 \
\cb3     .\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf8 \strokec8 ContentService\cf4 \strokec4 .\cf8 \strokec8 MimeType\cf4 \strokec4 .\cf8 \strokec8 JSON\cf4 \strokec4 )\cb1 \
\cb3     .\cf6 \strokec6 setHeader\cf4 \strokec4 (\cf7 \strokec7 "Access-Control-Allow-Origin"\cf4 \strokec4 , \cf7 \strokec7 "*"\cf4 \strokec4 )\cb1 \
\cb3     .\cf6 \strokec6 setHeader\cf4 \strokec4 (\cf7 \strokec7 "Access-Control-Allow-Methods"\cf4 \strokec4 , \cf7 \strokec7 "GET,POST,OPTIONS"\cf4 \strokec4 )\cb1 \
\cb3     .\cf6 \strokec6 setHeader\cf4 \strokec4 (\cf7 \strokec7 "Access-Control-Allow-Headers"\cf4 \strokec4 , \cf7 \strokec7 "Content-Type"\cf4 \strokec4 );\cb1 \
\cb3 \}\cb1 \
}