{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf200
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red77\green80\blue85;\red246\green247\blue249;\red46\green49\blue51;
\red20\green67\blue174;\red24\green25\blue27;\red186\green6\blue115;\red162\green0\blue16;\red18\green115\blue126;
}
{\*\expandedcolortbl;;\cssrgb\c37255\c38824\c40784;\cssrgb\c97255\c97647\c98039;\cssrgb\c23529\c25098\c26275;
\cssrgb\c9412\c35294\c73725;\cssrgb\c12549\c12941\c14118;\cssrgb\c78824\c15294\c52549;\cssrgb\c70196\c7843\c7059;\cssrgb\c3529\c52157\c56863;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl400\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // === API GETTER FUNCTIONS FOR ENTRIES, ARTISTS, CATEGORIES, LEADERBOARD ===\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getArtistListSheet_\cf4 \strokec4 () \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 ss\cf4 \strokec4  = \cf7 \strokec7 SpreadsheetApp\cf4 \strokec4 .\cf6 \strokec6 openById\cf4 \strokec4 (\cf7 \strokec7 SHEET_ID\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheetName\cf4 \strokec4  = \cf8 \strokec8 "Main Artist List"\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 ss\cf4 \strokec4 .\cf6 \strokec6 getSheetByName\cf4 \strokec4 (\cf6 \strokec6 sheetName\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 sheet\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 ss\cf4 \strokec4 .\cf6 \strokec6 insertSheet\cf4 \strokec4 (\cf6 \strokec6 sheetName\cf4 \strokec4 );\cb1 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 appendRow\cf4 \strokec4 ([\cf8 \strokec8 "Name"\cf4 \strokec4 , \cf8 \strokec8 "Email"\cf4 \strokec4 , \cf8 \strokec8 "Booth Location"\cf4 \strokec4 ]); \cf2 \strokec2 // Match your sheet's headers!\cf4 \cb1 \strokec4 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getEventData\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 eventKey\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 eventKey\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 config\cf4 \strokec4  = \cf6 \strokec6 getEventConfig\cf4 \strokec4 (\cf6 \strokec6 eventKey\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 eventKey\cf4 \strokec4 : \cf6 \strokec6 eventKey\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 name\cf4 \strokec4 : \cf6 \strokec6 config\cf4 \strokec4 .\cf6 \strokec6 eventName\cf4 \strokec4  || \cf8 \strokec8 ""\cf4 \strokec4 ,     \cf2 \strokec2 // Always provide the friendly name!\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 logo\cf4 \strokec4 : \cf6 \strokec6 config\cf4 \strokec4 .\cf6 \strokec6 eventLogo\cf4 \strokec4  || \cf8 \strokec8 ""\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 email\cf4 \strokec4 : \cf6 \strokec6 config\cf4 \strokec4 .\cf6 \strokec6 eventEmail\cf4 \strokec4  || \cf8 \strokec8 ""\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 // Add other fields as needed\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 eventKey\cf4 \strokec4 : \cf6 \strokec6 eventKey\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 name\cf4 \strokec4 : \cf8 \strokec8 ""\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 logo\cf4 \strokec4 : \cf8 \strokec8 ""\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 error\cf4 \strokec4 : \cf7 \strokec7 String\cf4 \strokec4 (\cf6 \strokec6 err\cf4 \strokec4 )\cb1 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getArtistList\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getArtistListSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 artists\cf4 \strokec4  = [];\cb1 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf6 \strokec6 artists\cf4 \strokec4 .\cf6 \strokec6 push\cf4 \strokec4 (\{\cb1 \
\cb3         \cf6 \strokec6 name\cf4 \strokec4 : \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 0\cf4 \strokec4 ] ? \cf7 \strokec7 String\cf4 \strokec4 (\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 0\cf4 \strokec4 ]) : \cf8 \strokec8 ""\cf4 \strokec4 ,    \cf2 \strokec2 // Column A: Name\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 email\cf4 \strokec4 : \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 1\cf4 \strokec4 ] ? \cf7 \strokec7 String\cf4 \strokec4 (\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 1\cf4 \strokec4 ]) : \cf8 \strokec8 ""\cf4 \strokec4 ,   \cf2 \strokec2 // Column B: Email\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 booth\cf4 \strokec4 : \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 2\cf4 \strokec4 ] ? \cf7 \strokec7 String\cf4 \strokec4 (\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 2\cf4 \strokec4 ]) : \cf8 \strokec8 ""\cf4 \strokec4     \cf2 \strokec2 // Column C: Booth Location\cf4 \cb1 \strokec4 \
\cb3       \});\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{ \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 true\cf4 \strokec4 , \cf6 \strokec6 artists\cf4 \strokec4 : \cf6 \strokec6 artists\cf4 \strokec4  \}))\cb1 \
\cb3       .\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{ \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 artists\cf4 \strokec4 : [], \cf6 \strokec6 error\cf4 \strokec4 : \cf6 \strokec6 err\cf4 \strokec4 .\cf6 \strokec6 toString\cf4 \strokec4 () \}))\cb1 \
\cb3       .\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getRawScores\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getRawScoresSheet_\cf4 \strokec4 ();\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\cb3   \cf2 \strokec2 // Optionally, remove the header row:\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4  > \cf9 \strokec9 1\cf4 \strokec4 ) \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 slice\cf4 \strokec4 (\cf9 \strokec9 1\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\cf6 \strokec6 data\cf4 \strokec4 ))\cb1 \
\cb3     .\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 \strokec2 // === Get Leaderboard - Dynamically generated from Raw Scores and Entries ===\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getRawScores\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getRawScoresSheet_\cf4 \strokec4 ();\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 results\cf4 \strokec4  = [];\cb1 \
\cb3   \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 row\cf4 \strokec4  = \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ];\cb1 \
\cb3     \cf6 \strokec6 results\cf4 \strokec4 .\cf6 \strokec6 push\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 judgeName\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 0\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 entryNo\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 1\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 placement\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 2\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 technique\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 3\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 qualityScore\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 4\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 blackworkOrColour\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 5\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 readability\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 6\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 creativity\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 7\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 difficulty\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 8\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 styleAccuracy\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 9\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 judgesScore\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 10\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 feedback\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 11\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 timestamp\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 12\cf4 \strokec4 ]\cb1 \
\cb3     \});\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 output\cf4 \strokec4  = \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\cf6 \strokec6 results\cf4 \strokec4 ))\cb1 \
\cb3     .\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \cf6 \strokec6 output\cf4 \strokec4 .\cf6 \strokec6 setAllowCrossOrigin\cf4 \strokec4  && \cf6 \strokec6 output\cf4 \strokec4 .\cf6 \strokec6 setAllowCrossOrigin\cf4 \strokec4 (\cf5 \strokec5 true\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 output\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getLeaderboard\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 rawScoresSheet\cf4 \strokec4  = \cf6 \strokec6 getRawScoresSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 entriesSheet\cf4 \strokec4  = \cf6 \strokec6 getEntriesSheet_\cf4 \strokec4 ();\cb1 \
\
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 rawScoresData\cf4 \strokec4  = \cf6 \strokec6 rawScoresSheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 entriesData\cf4 \strokec4  = \cf6 \strokec6 entriesSheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 rawScoresData\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4  < \cf9 \strokec9 2\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 ([]))\cb1 \
\cb3         .\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf2 \strokec2 // Build a map of entry details from the Entries sheet\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 entryDetailsMap\cf4 \strokec4  = \{\};\cb1 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 entriesData\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 entryRow\cf4 \strokec4  = \cf6 \strokec6 entriesData\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ];\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 entryNumber\cf4 \strokec4  = \cf6 \strokec6 entryRow\cf4 \strokec4 [\cf9 \strokec9 4\cf4 \strokec4 ]; \cf2 \strokec2 // Entry Number (Column E)\cf4 \cb1 \strokec4 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 entryNumber\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf6 \strokec6 entryDetailsMap\cf4 \strokec4 [\cf6 \strokec6 entryNumber\cf4 \strokec4 .\cf6 \strokec6 toString\cf4 \strokec4 ()] = \{\cb1 \
\cb3           \cf6 \strokec6 artist\cf4 \strokec4 : \cf6 \strokec6 entryRow\cf4 \strokec4 [\cf9 \strokec9 1\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ,    \cf2 \strokec2 // Artist (Column B)\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 booth\cf4 \strokec4 : \cf6 \strokec6 entryRow\cf4 \strokec4 [\cf9 \strokec9 2\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ,     \cf2 \strokec2 // Booth (Column C)\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 category\cf4 \strokec4 : \cf6 \strokec6 entryRow\cf4 \strokec4 [\cf9 \strokec9 3\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4    \cf2 \strokec2 // Category (Column D)\cf4 \cb1 \strokec4 \
\cb3         \};\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf2 \strokec2 // Calculate total scores per entry from Raw Scores\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 entryScores\cf4 \strokec4  = \{\}; \cf2 \strokec2 // \{ entryNumber: \{ totalCalculatedScoreSum: ... \} \}\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 rawScoresData\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 scoreRow\cf4 \strokec4  = \cf6 \strokec6 rawScoresData\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ];\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 entryNum\cf4 \strokec4  = \cf6 \strokec6 scoreRow\cf4 \strokec4 [\cf9 \strokec9 1\cf4 \strokec4 ]; \cf2 \strokec2 // ENTRY NO (Column B)\cf4 \cb1 \strokec4 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 entryNum\cf4 \strokec4 ) \cf5 \strokec5 continue\cf4 \strokec4 ;\cb1 \
\
\cb3       \cf2 \strokec2 // Sum scores from columns 2 to 10 (Placement to Judges Score)\cf4 \cb1 \strokec4 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 judgeCalculatedScore\cf4 \strokec4  = \cf9 \strokec9 0\cf4 \strokec4 ;\cb1 \
\cb3       \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 j\cf4 \strokec4  = \cf9 \strokec9 2\cf4 \strokec4 ; \cf6 \strokec6 j\cf4 \strokec4  <= \cf9 \strokec9 10\cf4 \strokec4 ; \cf6 \strokec6 j\cf4 \strokec4 ++) \{\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 score\cf4 \strokec4  = \cf6 \strokec6 parseFloat\cf4 \strokec4 (\cf6 \strokec6 scoreRow\cf4 \strokec4 [\cf6 \strokec6 j\cf4 \strokec4 ] || \cf9 \strokec9 0\cf4 \strokec4 );\cb1 \
\cb3         \cf6 \strokec6 judgeCalculatedScore\cf4 \strokec4  += \cf6 \strokec6 score\cf4 \strokec4 ;\cb1 \
\cb3       \}\cb1 \
\
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 entryScores\cf4 \strokec4 [\cf6 \strokec6 entryNum\cf4 \strokec4 .\cf6 \strokec6 toString\cf4 \strokec4 ()]) \{\cb1 \
\cb3         \cf6 \strokec6 entryScores\cf4 \strokec4 [\cf6 \strokec6 entryNum\cf4 \strokec4 .\cf6 \strokec6 toString\cf4 \strokec4 ()] = \{ \cf6 \strokec6 totalCalculatedScoreSum\cf4 \strokec4 : \cf9 \strokec9 0\cf4 \strokec4  \};\cb1 \
\cb3       \}\cb1 \
\cb3       \cf6 \strokec6 entryScores\cf4 \strokec4 [\cf6 \strokec6 entryNum\cf4 \strokec4 .\cf6 \strokec6 toString\cf4 \strokec4 ()].\cf6 \strokec6 totalCalculatedScoreSum\cf4 \strokec4  += \cf6 \strokec6 judgeCalculatedScore\cf4 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf2 \strokec2 // Build the leaderboard array\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 leaderboard\cf4 \strokec4  = [];\cb1 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 entryNumStr\cf4 \strokec4  \cf5 \strokec5 in\cf4 \strokec4  \cf6 \strokec6 entryScores\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 scoreData\cf4 \strokec4  = \cf6 \strokec6 entryScores\cf4 \strokec4 [\cf6 \strokec6 entryNumStr\cf4 \strokec4 ];\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 details\cf4 \strokec4  = \cf6 \strokec6 entryDetailsMap\cf4 \strokec4 [\cf6 \strokec6 entryNumStr\cf4 \strokec4 ];\cb1 \
\
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 details\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf6 \strokec6 leaderboard\cf4 \strokec4 .\cf6 \strokec6 push\cf4 \strokec4 (\{\cb1 \
\cb3           \cf6 \strokec6 category\cf4 \strokec4 : \cf6 \strokec6 details\cf4 \strokec4 .\cf6 \strokec6 category\cf4 \strokec4 ,\cb1 \
\cb3           \cf6 \strokec6 name\cf4 \strokec4 : \cf6 \strokec6 details\cf4 \strokec4 .\cf6 \strokec6 artist\cf4 \strokec4 ,\cb1 \
\cb3           \cf6 \strokec6 score\cf4 \strokec4 : \cf7 \strokec7 Math\cf4 \strokec4 .\cf6 \strokec6 round\cf4 \strokec4 (\cf6 \strokec6 scoreData\cf4 \strokec4 .\cf6 \strokec6 totalCalculatedScoreSum\cf4 \strokec4 ),\cb1 \
\cb3           \cf6 \strokec6 entryNo\cf4 \strokec4 : \cf6 \strokec6 entryNumStr\cf4 \strokec4 ,\cb1 \
\cb3           \cf6 \strokec6 location\cf4 \strokec4 : \cf6 \strokec6 details\cf4 \strokec4 .\cf6 \strokec6 booth\cf4 \cb1 \strokec4 \
\cb3         \});\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf6 \strokec6 leaderboard\cf4 \strokec4 .\cf6 \strokec6 sort\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4 (\cf6 \strokec6 a\cf4 \strokec4 , \cf6 \strokec6 b\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 b\cf4 \strokec4 .\cf6 \strokec6 score\cf4 \strokec4  - \cf6 \strokec6 a\cf4 \strokec4 .\cf6 \strokec6 score\cf4 \strokec4 ;\cb1 \
\cb3     \});\cb1 \
\
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\cf6 \strokec6 leaderboard\cf4 \strokec4 ))\cb1 \
\cb3       .\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error in getLeaderboard: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Failed to get leaderboard: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 \strokec2 // Sheet getter\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getRawScoresSheet_\cf4 \strokec4 () \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 ss\cf4 \strokec4  = \cf7 \strokec7 SpreadsheetApp\cf4 \strokec4 .\cf6 \strokec6 openById\cf4 \strokec4 (\cf7 \strokec7 SHEET_ID\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheetName\cf4 \strokec4  = \cf8 \strokec8 "Raw Scores"\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 ss\cf4 \strokec4 .\cf6 \strokec6 getSheetByName\cf4 \strokec4 (\cf6 \strokec6 sheetName\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 sheet\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 ss\cf4 \strokec4 .\cf6 \strokec6 insertSheet\cf4 \strokec4 (\cf6 \strokec6 sheetName\cf4 \strokec4 );\cb1 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 appendRow\cf4 \strokec4 ([\cb1 \
\cb3       \cf8 \strokec8 "JUDGE"\cf4 \strokec4 , \cf8 \strokec8 "ENTRY NO"\cf4 \strokec4 , \cf8 \strokec8 "Placement"\cf4 \strokec4 , \cf8 \strokec8 "Technique"\cf4 \strokec4 , \cf8 \strokec8 "Quality"\cf4 \strokec4 , \cf8 \strokec8 "Blackwork"\cf4 \strokec4 ,\cb1 \
\cb3       \cf8 \strokec8 "Readability"\cf4 \strokec4 , \cf8 \strokec8 "Creativity"\cf4 \strokec4 , \cf8 \strokec8 "Difficulty"\cf4 \strokec4 , \cf8 \strokec8 "Accuracy"\cf4 \strokec4 , \cf8 \strokec8 "Judges Score"\cf4 \strokec4 , \cf8 \strokec8 "FEEDBACK"\cf4 \strokec4 , \cf8 \strokec8 "Timestamp"\cf4 \cb1 \strokec4 \
\cb3     ]);\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 \strokec2 // API endpoint\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getRawScores\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getRawScoresSheet_\cf4 \strokec4 ();\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 results\cf4 \strokec4  = [];\cb1 \
\cb3   \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 row\cf4 \strokec4  = \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ];\cb1 \
\cb3     \cf6 \strokec6 results\cf4 \strokec4 .\cf6 \strokec6 push\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 judgeName\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 0\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 entryNo\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 1\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 placement\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 2\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 technique\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 3\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 qualityScore\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 4\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 blackworkOrColour\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 5\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 readability\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 6\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 creativity\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 7\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 difficulty\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 8\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 styleAccuracy\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 9\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 judgesScore\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 10\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 feedback\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 11\cf4 \strokec4 ],\cb1 \
\cb3       \cf6 \strokec6 timestamp\cf4 \strokec4 : \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 12\cf4 \strokec4 ]\cb1 \
\cb3     \});\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 output\cf4 \strokec4  = \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\cf6 \strokec6 results\cf4 \strokec4 ))\cb1 \
\cb3     .\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \cf6 \strokec6 output\cf4 \strokec4 .\cf6 \strokec6 setAllowCrossOrigin\cf4 \strokec4  && \cf6 \strokec6 output\cf4 \strokec4 .\cf6 \strokec6 setAllowCrossOrigin\cf4 \strokec4 (\cf5 \strokec5 true\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 output\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
}