{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf200
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red77\green80\blue85;\red246\green247\blue249;\red46\green49\blue51;
\red20\green67\blue174;\red186\green6\blue115;\red162\green0\blue16;\red24\green25\blue27;\red18\green115\blue126;
}
{\*\expandedcolortbl;;\cssrgb\c37255\c38824\c40784;\cssrgb\c97255\c97647\c98039;\cssrgb\c23529\c25098\c26275;
\cssrgb\c9412\c35294\c73725;\cssrgb\c78824\c15294\c52549;\cssrgb\c70196\c7843\c7059;\cssrgb\c12549\c12941\c14118;\cssrgb\c3529\c52157\c56863;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww38200\viewh18580\viewkind0
\deftab720
\pard\pardeftab720\sl400\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // === CONFIGURATION ===\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 FROM_EMAIL\cf4 \strokec4  = \cf7 \strokec7 "web@tattscore.com"\cf4 \strokec4 ;\cb1 \
\cf5 \cb3 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 MASTER_API_URL\cf4 \strokec4  = \cf7 \strokec7 "https://script.google.com/macros/s/AKfycbzQ6R6W7YM-wMoNw1S6uK27ThRAJ8p-x9pUAtjCvVRDmVOjBXO0N0TH4Z2fEmX25wSr/exec"\cf4 \strokec4 ;\cb1 \
\cf5 \cb3 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 SHEET_ID\cf4 \strokec4  = \cf7 \strokec7 "1gmZgI6h1friMZhSL-EEeu_l-5CsOsn_CKKZp6Y_AY18"\cf4 \strokec4 ;\cb1 \
\cf5 \cb3 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 MASTER_ADMIN_SHEET_ID\cf4 \strokec4  = \cf7 \strokec7 "15pcfmID3Te0n8dN_T0TqmrKiPSLganxQZsDmctodjWM"\cf4 \strokec4 ;\cb1 \
\cf5 \cb3 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 ID_PHOTOS_FOLDER_ID\cf4 \strokec4  = \cf7 \strokec7 '1f5JxOlPymf5GjD_Q9dABwwGIbh_AHAKC'\cf4 \strokec4 ;\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 \strokec2 // === Scoring Areas (Global Constant) ===\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 SCORING_AREAS\cf4 \strokec4  = [\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \{\cb1 \
\cb3     \cf8 \strokec8 key\cf4 \strokec4 : \cf7 \strokec7 'placement'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 label\cf4 \strokec4 : \cf7 \strokec7 'Placement / Flow'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 range\cf4 \strokec4 : [-\cf9 \strokec9 20\cf4 \strokec4 , \cf9 \strokec9 15\cf4 \strokec4 ],\cb1 \
\cb3     \cf8 \strokec8 description\cf4 \strokec4 : \cf7 \strokec7 'Scoring Guide: -20 = Extremely poor, 0 = Slightly off, 15 = Excellent.'\cf4 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     \cf8 \strokec8 key\cf4 \strokec4 : \cf7 \strokec7 'technique'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 label\cf4 \strokec4 : \cf7 \strokec7 'Technical Application'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 range\cf4 \strokec4 : [-\cf9 \strokec9 20\cf4 \strokec4 , \cf9 \strokec9 15\cf4 \strokec4 ],\cb1 \
\cb3     \cf8 \strokec8 description\cf4 \strokec4 : \cf7 \strokec7 'Scoring Guide: -20 = Major issues, 0 = Noticeable flaws, 5 = Inconsistent, 10 = Mostly clean; minor flaws, 15 = Lawless.'\cf4 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     \cf8 \strokec8 key\cf4 \strokec4 : \cf7 \strokec7 'qualityScore'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 label\cf4 \strokec4 : \cf7 \strokec7 'Realism / Design Quality'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 range\cf4 \strokec4 : [\cf9 \strokec9 0\cf4 \strokec4 , \cf9 \strokec9 30\cf4 \strokec4 ],\cb1 \
\cb3     \cf8 \strokec8 description\cf4 \strokec4 : \cf7 \strokec7 'Realism: 0 = Unrecognisable, 5 = Some clarity, but flat, inconsistent, unrealistic, 15 = Clear subject good depth, minor flaws, 30 = Flawless realism with lifelike shading and depth. Design: creativity & originality - 0 = Poor design, no structure or clarity, 5 = Uninspired, lacks originality, 15 = Solid concept, needs refinement, 30 = Exceptional, artistic and imaginative.'\cf4 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     \cf8 \strokec8 key\cf4 \strokec4 : \cf7 \strokec7 'blackworkOrColour'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 label\cf4 \strokec4 : \cf7 \strokec7 'Blackwork / Colour & Contrast'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 range\cf4 \strokec4 : [\cf9 \strokec9 0\cf4 \strokec4 , \cf9 \strokec9 30\cf4 \strokec4 ],\cb1 \
\cb3     \cf8 \strokec8 description\cf4 \strokec4 : \cf7 \strokec7 'Colour: colour use & / or contrast -  0 = No understanding, muddy / flat, 5 = Weak contrast or very poor use of tone and colour, 15 = Moderate contrast or palette use, 30 = Perfect colour use and / or contrast; Blackwork: linework & consistency;  -  0 = Uneven, distorted, lacks intent or structure, 5 = Inconsistent linework or patchy fill, 15 = Clean overall, with minor breaks or alignment issues, 30 = Precise, balanced, and extremely well saturated. Flawless.'\cf4 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     \cf8 \strokec8 key\cf4 \strokec4 : \cf7 \strokec7 'readability'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 label\cf4 \strokec4 : \cf7 \strokec7 'Readability'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 range\cf4 \strokec4 : [-\cf9 \strokec9 10\cf4 \strokec4 , \cf9 \strokec9 30\cf4 \strokec4 ],\cb1 \
\cb3     \cf8 \strokec8 description\cf4 \strokec4 : \cf7 \strokec7 '-10 = unreadable, 5 = difficult to read, 15 = mostly readable, 30 = perfect clarity.'\cf4 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     \cf8 \strokec8 key\cf4 \strokec4 : \cf7 \strokec7 'creativity'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 label\cf4 \strokec4 : \cf7 \strokec7 'Creativity'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 range\cf4 \strokec4 : [\cf9 \strokec9 0\cf4 \strokec4 , \cf9 \strokec9 30\cf4 \strokec4 ],\cb1 \
\cb3     \cf8 \strokec8 description\cf4 \strokec4 : \cf7 \strokec7 '0 = generic, 5 = minimal variation, 15 = some creativity, 30 = exceptional & unique.'\cf4 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     \cf8 \strokec8 key\cf4 \strokec4 : \cf7 \strokec7 'difficulty'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 label\cf4 \strokec4 : \cf7 \strokec7 'Technical Difficulty'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 range\cf4 \strokec4 : [\cf9 \strokec9 0\cf4 \strokec4 , \cf9 \strokec9 30\cf4 \strokec4 ],\cb1 \
\cb3     \cf8 \strokec8 description\cf4 \strokec4 : \cf7 \strokec7 '0 = basic, 5 = mild challenge, 15 = above average, 30 = very difficult.'\cf4 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     \cf8 \strokec8 key\cf4 \strokec4 : \cf7 \strokec7 'styleAccuracy'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 label\cf4 \strokec4 : \cf7 \strokec7 'Style / Category Accuracy'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 range\cf4 \strokec4 : [-\cf9 \strokec9 50\cf4 \strokec4 , \cf9 \strokec9 0\cf4 \strokec4 ],\cb1 \
\cb3     \cf8 \strokec8 description\cf4 \strokec4 : \cf7 \strokec7 '0 = perfect representation, -50 = does not represent style or category.'\cf4 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     \cf8 \strokec8 key\cf4 \strokec4 : \cf7 \strokec7 'judgesScore'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 label\cf4 \strokec4 : \cf7 \strokec7 "Judge's Overall Opinion"\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 range\cf4 \strokec4 : [\cf9 \strokec9 0\cf4 \strokec4 , \cf9 \strokec9 100\cf4 \strokec4 ],\cb1 \
\cb3     \cf8 \strokec8 description\cf4 \strokec4 : \cf7 \strokec7 '0 = awful, 60+ = potential winner, 100 = WOW!'\cf4 \cb1 \strokec4 \
\cb3   \}\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 \strokec2 // === DYNAMIC EVENT CONFIG RETRIEVAL ===\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 // Fetches event config from the Event Data sheet in the MASTER_ADMIN_SHEET_ID spreadsheet.\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 // Expects a sheet named 'Event Data' with a column 'eventKey' and other config columns.\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf8 \strokec8 getEventConfig\cf4 \strokec4 (\cf8 \strokec8 eventKey\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf8 \strokec8 eventKey\cf4 \strokec4 ) \cf5 \strokec5 throw\cf4 \strokec4  \cf5 \strokec5 new\cf4 \strokec4  \cf6 \strokec6 Error\cf4 \strokec4 (\cf7 \strokec7 'No eventKey provided to getEventConfig'\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 ss\cf4 \strokec4  = \cf6 \strokec6 SpreadsheetApp\cf4 \strokec4 .\cf8 \strokec8 openById\cf4 \strokec4 (\cf6 \strokec6 MASTER_ADMIN_SHEET_ID\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 sheet\cf4 \strokec4  = \cf8 \strokec8 ss\cf4 \strokec4 .\cf8 \strokec8 getSheetByName\cf4 \strokec4 (\cf7 \strokec7 'Event Data'\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (!\cf8 \strokec8 sheet\cf4 \strokec4 ) \cf5 \strokec5 throw\cf4 \strokec4  \cf5 \strokec5 new\cf4 \strokec4  \cf6 \strokec6 Error\cf4 \strokec4 (\cf7 \strokec7 'Event Data sheet not found'\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 data\cf4 \strokec4  = \cf8 \strokec8 sheet\cf4 \strokec4 .\cf8 \strokec8 getDataRange\cf4 \strokec4 ().\cf8 \strokec8 getValues\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 headers\cf4 \strokec4  = \cf8 \strokec8 data\cf4 \strokec4 [\cf9 \strokec9 0\cf4 \strokec4 ];\cb1 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf8 \strokec8 i\cf4 \strokec4  < \cf8 \strokec8 data\cf4 \strokec4 .\cf8 \strokec8 length\cf4 \strokec4 ; \cf8 \strokec8 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  ((\cf8 \strokec8 data\cf4 \strokec4 [\cf8 \strokec8 i\cf4 \strokec4 ][\cf8 \strokec8 headers\cf4 \strokec4 .\cf8 \strokec8 indexOf\cf4 \strokec4 (\cf7 \strokec7 'eventKey'\cf4 \strokec4 )] || \cf7 \strokec7 ''\cf4 \strokec4 ).\cf8 \strokec8 toString\cf4 \strokec4 ().\cf8 \strokec8 trim\cf4 \strokec4 () === \cf8 \strokec8 eventKey\cf4 \strokec4 .\cf8 \strokec8 trim\cf4 \strokec4 ()) \{\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf8 \strokec8 config\cf4 \strokec4  = \{\};\cb1 \
\cb3         \cf8 \strokec8 headers\cf4 \strokec4 .\cf8 \strokec8 forEach\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4 (\cf8 \strokec8 header\cf4 \strokec4 , \cf8 \strokec8 idx\cf4 \strokec4 ) \{ \cf8 \strokec8 config\cf4 \strokec4 [\cf8 \strokec8 header\cf4 \strokec4 ] = \cf8 \strokec8 data\cf4 \strokec4 [\cf8 \strokec8 i\cf4 \strokec4 ][\cf8 \strokec8 idx\cf4 \strokec4 ]; \});\cb1 \
\cb3         \cf2 \strokec2 // fallback for common names\cf4 \cb1 \strokec4 \
\cb3         \cf8 \strokec8 config\cf4 \strokec4 .\cf8 \strokec8 eventName\cf4 \strokec4  = \cf8 \strokec8 config\cf4 \strokec4 .\cf8 \strokec8 eventName\cf4 \strokec4  || \cf8 \strokec8 config\cf4 \strokec4 .\cf8 \strokec8 name\cf4 \strokec4  || \cf8 \strokec8 config\cf4 \strokec4 .\cf6 \strokec6 Name\cf4 \strokec4  || \cf7 \strokec7 ''\cf4 \strokec4 ;\cb1 \
\cb3         \cf8 \strokec8 config\cf4 \strokec4 .\cf8 \strokec8 eventEmail\cf4 \strokec4  = \cf8 \strokec8 config\cf4 \strokec4 .\cf8 \strokec8 eventEmail\cf4 \strokec4  || \cf8 \strokec8 config\cf4 \strokec4 .\cf8 \strokec8 email\cf4 \strokec4  || \cf8 \strokec8 config\cf4 \strokec4 .\cf6 \strokec6 Email\cf4 \strokec4  || \cf6 \strokec6 FROM_EMAIL\cf4 \strokec4 ;\cb1 \
\cb3         \cf8 \strokec8 config\cf4 \strokec4 .\cf8 \strokec8 eventLogo\cf4 \strokec4  = \cf8 \strokec8 config\cf4 \strokec4 .\cf8 \strokec8 eventLogo\cf4 \strokec4  || \cf8 \strokec8 config\cf4 \strokec4 .\cf8 \strokec8 logo\cf4 \strokec4  || \cf8 \strokec8 config\cf4 \strokec4 .\cf6 \strokec6 Logo\cf4 \strokec4  || \cf7 \strokec7 ''\cf4 \strokec4 ;\cb1 \
\cb3         \cf5 \strokec5 return\cf4 \strokec4  \cf8 \strokec8 config\cf4 \strokec4 ;\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 throw\cf4 \strokec4  \cf5 \strokec5 new\cf4 \strokec4  \cf6 \strokec6 Error\cf4 \strokec4 (\cf7 \strokec7 'Event config not found for eventKey: '\cf4 \strokec4  + \cf8 \strokec8 eventKey\cf4 \strokec4 );\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf8 \strokec8 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf6 \strokec6 Logger\cf4 \strokec4 .\cf8 \strokec8 log\cf4 \strokec4 (\cf7 \strokec7 "Error in getEventConfig: "\cf4 \strokec4  + \cf8 \strokec8 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 throw\cf4 \strokec4  \cf8 \strokec8 err\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 \strokec2 // === CORS HEADERS ===\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf8 \strokec8 setCORSHeaders\cf4 \strokec4 (\cf8 \strokec8 response\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf8 \strokec8 response\cf4 \strokec4 .\cf8 \strokec8 setHeader\cf4 \strokec4 (\cf7 \strokec7 'Access-Control-Allow-Origin'\cf4 \strokec4 , \cf7 \strokec7 'https://tattscore.com'\cf4 \strokec4 );\cb1 \
\cb3     \cf8 \strokec8 response\cf4 \strokec4 .\cf8 \strokec8 setHeader\cf4 \strokec4 (\cf7 \strokec7 'Access-Control-Allow-Methods'\cf4 \strokec4 , \cf7 \strokec7 'GET,POST,OPTIONS'\cf4 \strokec4 );\cb1 \
\cb3     \cf8 \strokec8 response\cf4 \strokec4 .\cf8 \strokec8 setHeader\cf4 \strokec4 (\cf7 \strokec7 'Access-Control-Allow-Headers'\cf4 \strokec4 , \cf7 \strokec7 'Content-Type'\cf4 \strokec4 );\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf8 \strokec8 e\cf4 \strokec4 ) \{\}\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf8 \strokec8 response\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf8 \strokec8 doOptions\cf4 \strokec4 (\cf8 \strokec8 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf8 \strokec8 setCORSHeaders\cf4 \strokec4 (\cf6 \strokec6 ContentService\cf4 \strokec4 .\cf8 \strokec8 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 ''\cf4 \strokec4 ).\cf8 \strokec8 setMimeType\cf4 \strokec4 (\cf6 \strokec6 ContentService\cf4 \strokec4 .\cf6 \strokec6 MimeType\cf4 \strokec4 .\cf6 \strokec6 TEXT\cf4 \strokec4 ));\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf8 \strokec8 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf8 \strokec8 setCORSHeaders\cf4 \strokec4 (\cf6 \strokec6 ContentService\cf4 \strokec4 .\cf8 \strokec8 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 ''\cf4 \strokec4 ));\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 \strokec2 // Placeholder for notifyOnError, assuming it's defined elsewhere (e.g., in helpers.gs)\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf8 \strokec8 notifyOnError\cf4 \strokec4 (\cf8 \strokec8 functionName\cf4 \strokec4 , \cf8 \strokec8 error\cf4 \strokec4 , \cf8 \strokec8 event\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf6 \strokec6 Logger\cf4 \strokec4 .\cf8 \strokec8 log\cf4 \strokec4 (\cf7 \strokec7 "Error in "\cf4 \strokec4  + \cf8 \strokec8 functionName\cf4 \strokec4  + \cf7 \strokec7 ": "\cf4 \strokec4  + \cf8 \strokec8 error\cf4 \strokec4 );\cb1 \
\cb3 \}\cb1 \
}