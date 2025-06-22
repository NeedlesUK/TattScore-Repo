{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf200
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red77\green80\blue85;\red246\green247\blue249;\red46\green49\blue51;
\red20\green67\blue174;\red24\green25\blue27;\red186\green6\blue115;\red162\green0\blue16;\red18\green115\blue126;
\red21\green98\blue39;}
{\*\expandedcolortbl;;\cssrgb\c37255\c38824\c40784;\cssrgb\c97255\c97647\c98039;\cssrgb\c23529\c25098\c26275;
\cssrgb\c9412\c35294\c73725;\cssrgb\c12549\c12941\c14118;\cssrgb\c78824\c15294\c52549;\cssrgb\c70196\c7843\c7059;\cssrgb\c3529\c52157\c56863;
\cssrgb\c7451\c45098\c20000;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl400\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // === ENTRY MANAGEMENT FUNCTIONS ===\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getEntriesSheet_\cf4 \strokec4 () \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 ss\cf4 \strokec4  = \cf7 \strokec7 SpreadsheetApp\cf4 \strokec4 .\cf6 \strokec6 openById\cf4 \strokec4 (\cf7 \strokec7 SHEET_ID\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 ss\cf4 \strokec4 .\cf6 \strokec6 getSheetByName\cf4 \strokec4 (\cf8 \strokec8 "Entries"\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 sheet\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 ss\cf4 \strokec4 .\cf6 \strokec6 insertSheet\cf4 \strokec4 (\cf8 \strokec8 "Entries"\cf4 \strokec4 );\cb1 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 appendRow\cf4 \strokec4 ([\cf8 \strokec8 'Timestamp'\cf4 \strokec4 , \cf8 \strokec8 'Artist'\cf4 \strokec4 , \cf8 \strokec8 'Booth'\cf4 \strokec4 , \cf8 \strokec8 'Category'\cf4 \strokec4 , \cf8 \strokec8 'Entry Number'\cf4 \strokec4 , \cf8 \strokec8 'Card Issued'\cf4 \strokec4 , \cf8 \strokec8 'Email'\cf4 \strokec4 ]);\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getEntries\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getEntriesSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 all\cf4 \strokec4  = [];\cb1 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf6 \strokec6 all\cf4 \strokec4 .\cf6 \strokec6 push\cf4 \strokec4 (\{\cb1 \
\cb3         \cf6 \strokec6 timestamp\cf4 \strokec4 : \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 0\cf4 \strokec4 ] ? \cf7 \strokec7 String\cf4 \strokec4 (\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 0\cf4 \strokec4 ]) : \cf8 \strokec8 ""\cf4 \strokec4 ,\cb1 \
\cb3         \cf6 \strokec6 artist\cf4 \strokec4 : \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 1\cf4 \strokec4 ] ? \cf7 \strokec7 String\cf4 \strokec4 (\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 1\cf4 \strokec4 ]) : \cf8 \strokec8 ""\cf4 \strokec4 ,\cb1 \
\cb3         \cf6 \strokec6 booth\cf4 \strokec4 : \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 2\cf4 \strokec4 ] ? \cf7 \strokec7 String\cf4 \strokec4 (\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 2\cf4 \strokec4 ]) : \cf8 \strokec8 ""\cf4 \strokec4 ,\cb1 \
\cb3         \cf6 \strokec6 category\cf4 \strokec4 : \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 3\cf4 \strokec4 ] ? \cf7 \strokec7 String\cf4 \strokec4 (\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 3\cf4 \strokec4 ]) : \cf8 \strokec8 ""\cf4 \strokec4 ,\cb1 \
\cb3         \cf6 \strokec6 entryNumber\cf4 \strokec4 : \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 4\cf4 \strokec4 ] ? \cf7 \strokec7 String\cf4 \strokec4 (\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 4\cf4 \strokec4 ]) : \cf8 \strokec8 ""\cf4 \strokec4 ,\cb1 \
\cb3         \cf6 \strokec6 cardIssued\cf4 \strokec4 : \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 5\cf4 \strokec4 ] ? \cf7 \strokec7 String\cf4 \strokec4 (\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 5\cf4 \strokec4 ]) : \cf8 \strokec8 ""\cf4 \strokec4 ,\cb1 \
\cb3         \cf6 \strokec6 email\cf4 \strokec4 : \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 6\cf4 \strokec4 ] ? \cf7 \strokec7 String\cf4 \strokec4 (\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 6\cf4 \strokec4 ]) : \cf8 \strokec8 ""\cf4 \cb1 \strokec4 \
\cb3       \});\cb1 \
\cb3     \}\cb1 \
\cb3     \cf2 \strokec2 // Return JUST the array, not wrapped!\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\cf6 \strokec6 all\cf4 \strokec4 ))\cb1 \
\cb3       .\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 ([]))\cb1 \
\cb3       .\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getEventNameFromKey\cf4 \strokec4 (\cf6 \strokec6 eventKey\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf2 \strokec2 // Your master API, same as the front end uses\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 MASTER_API_URL\cf4 \strokec4  = \cf8 \strokec8 "https://script.google.com/macros/s/AKfycbzQ6R6W7YM-wMoNw1S6uK27ThRAJ8p-x9pUAtjCvVRDmVOjBXO0N0TH4Z2fEmX25wSr/exec"\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 response\cf4 \strokec4  = \cf7 \strokec7 UrlFetchApp\cf4 \strokec4 .\cf6 \strokec6 fetch\cf4 \strokec4 (\cf7 \strokec7 MASTER_API_URL\cf4 \strokec4  + \cf8 \strokec8 '?action=getEventData&eventKey='\cf4 \strokec4  + \cf6 \strokec6 encodeURIComponent\cf4 \strokec4 (\cf6 \strokec6 eventKey\cf4 \strokec4 ));\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 eventData\cf4 \strokec4  = \cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 parse\cf4 \strokec4 (\cf6 \strokec6 response\cf4 \strokec4 .\cf6 \strokec6 getContentText\cf4 \strokec4 ());\cb1 \
\cb3     \cf2 \strokec2 // Try .name, fallback to .Name or eventKey if not found\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 eventData\cf4 \strokec4 .\cf6 \strokec6 name\cf4 \strokec4  || \cf6 \strokec6 eventData\cf4 \strokec4 .\cf7 \strokec7 Name\cf4 \strokec4  || \cf6 \strokec6 eventKey\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error fetching event name for key: "\cf4 \strokec4  + \cf6 \strokec6 eventKey\cf4 \strokec4  + \cf8 \strokec8 " - "\cf4 \strokec4  + \cf6 \strokec6 e\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 eventKey\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 addEntry\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 artist\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 artist\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 booth\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 booth\cf4 \strokec4  || \cf8 \strokec8 ''\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 category\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 category\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 email\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 email\cf4 \strokec4  || \cf8 \strokec8 ''\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 eventKey\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 eventKey\cf4 \strokec4 ;\cb1 \
\
\cb3     \cf2 \strokec2 // Lookup the event name from the master API using the eventKey\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 eventName\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 eventName\cf4 \strokec4 ; \cf2 \strokec2 // Use the value from the form!\cf4 \cb1 \strokec4 \
\
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 artist\cf4 \strokec4  || !\cf6 \strokec6 category\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3         \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Artist name and category are required"\cf4 \cb1 \strokec4 \
\cb3       \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getEntriesSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 nextEntryNumber\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 4\cf4 \strokec4 ]) \{\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 entryNum\cf4 \strokec4  = \cf6 \strokec6 parseInt\cf4 \strokec4 (\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 4\cf4 \strokec4 ]);\cb1 \
\cb3         \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 entryNum\cf4 \strokec4  >= \cf6 \strokec6 nextEntryNumber\cf4 \strokec4 ) \{\cb1 \
\cb3           \cf6 \strokec6 nextEntryNumber\cf4 \strokec4  = \cf6 \strokec6 entryNum\cf4 \strokec4  + \cf9 \strokec9 1\cf4 \strokec4 ;\cb1 \
\cb3         \}\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 timestamp\cf4 \strokec4  = \cf5 \strokec5 new\cf4 \strokec4  \cf7 \strokec7 Date\cf4 \strokec4 ();\cb1 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 appendRow\cf4 \strokec4 ([\cf6 \strokec6 timestamp\cf4 \strokec4 , \cf6 \strokec6 artist\cf4 \strokec4 , \cf6 \strokec6 booth\cf4 \strokec4 , \cf6 \strokec6 category\cf4 \strokec4 , \cf6 \strokec6 nextEntryNumber\cf4 \strokec4 , \cf8 \strokec8 ''\cf4 \strokec4 , \cf6 \strokec6 email\cf4 \strokec4 ]);\cb1 \
\
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 entryData\cf4 \strokec4  = \{\cb1 \
\cb3       \cf6 \strokec6 artist\cf4 \strokec4 : \cf6 \strokec6 artist\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 booth\cf4 \strokec4 : \cf6 \strokec6 booth\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 category\cf4 \strokec4 : \cf6 \strokec6 category\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 email\cf4 \strokec4 : \cf6 \strokec6 email\cf4 \cb1 \strokec4 \
\cb3     \};\cb1 \
\cb3     \cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 emailSent\cf4 \strokec4  = \cf6 \strokec6 sendEntryConfirmationEmail\cf4 \strokec4 (\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf6 \strokec6 entryData\cf4 \strokec4 ,\cb1 \
\cb3   \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 eventKey\cf4 \strokec4 ,\cb1 \
\cb3   \cf6 \strokec6 eventName\cf4 \strokec4 ,\cb1 \
\cb3   \cf6 \strokec6 nextEntryNumber\cf4 \cb1 \strokec4 \
\cb3 );\cb1 \
\
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 true\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 message\cf4 \strokec4 : \cf8 \strokec8 "Entry added successfully"\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 entryNumber\cf4 \strokec4 : \cf6 \strokec6 nextEntryNumber\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 emailSent\cf4 \strokec4 : \cf6 \strokec6 emailSent\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 errorMessage\cf4 \strokec4  = \cf8 \strokec8 "Failed to add entry: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 .\cf6 \strokec6 message\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 errorStack\cf4 \strokec4  = \cf6 \strokec6 err\cf4 \strokec4 .\cf6 \strokec6 stack\cf4 \strokec4  ? \cf6 \strokec6 err\cf4 \strokec4 .\cf6 \strokec6 stack\cf4 \strokec4 .\cf6 \strokec6 split\cf4 \strokec4 (\cf8 \strokec8 '\\n'\cf4 \strokec4 ) : [];\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error in addEntry: "\cf4 \strokec4  + \cf6 \strokec6 errorMessage\cf4 \strokec4  + \cf8 \strokec8 "\\nStack: "\cf4 \strokec4  + \cf6 \strokec6 errorStack\cf4 \strokec4 .\cf6 \strokec6 join\cf4 \strokec4 (\cf8 \strokec8 '\\n'\cf4 \strokec4 ));\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 error\cf4 \strokec4 : \cf6 \strokec6 errorMessage\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 stack\cf4 \strokec4 : \cf6 \strokec6 errorStack\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf10 \cb3 \strokec10 /**\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  * Helper to fetch the real event name from the master API using the eventKey.\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  * Returns the event name, or eventKey as fallback.\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getEventNameFromKey\cf4 \strokec4 (\cf6 \strokec6 eventKey\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 MASTER_API_URL\cf4 \strokec4  = \cf8 \strokec8 "https://script.google.com/macros/s/AKfycbzQ6R6W7YM-wMoNw1S6uK27ThRAJ8p-x9pUAtjCvVRDmVOjBXO0N0TH4Z2fEmX25wSr/exec"\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 response\cf4 \strokec4  = \cf7 \strokec7 UrlFetchApp\cf4 \strokec4 .\cf6 \strokec6 fetch\cf4 \strokec4 (\cf7 \strokec7 MASTER_API_URL\cf4 \strokec4  + \cf8 \strokec8 '?action=getEventData&eventKey='\cf4 \strokec4  + \cf6 \strokec6 encodeURIComponent\cf4 \strokec4 (\cf6 \strokec6 eventKey\cf4 \strokec4 ));\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 eventData\cf4 \strokec4  = \cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 parse\cf4 \strokec4 (\cf6 \strokec6 response\cf4 \strokec4 .\cf6 \strokec6 getContentText\cf4 \strokec4 ());\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 eventData\cf4 \strokec4 .\cf6 \strokec6 name\cf4 \strokec4  || \cf6 \strokec6 eventData\cf4 \strokec4 .\cf7 \strokec7 Name\cf4 \strokec4  || \cf6 \strokec6 eventKey\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error fetching event name for key: "\cf4 \strokec4  + \cf6 \strokec6 eventKey\cf4 \strokec4  + \cf8 \strokec8 " - "\cf4 \strokec4  + \cf6 \strokec6 e\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 eventKey\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 updateEntry\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 entryNumber\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 entryNumber\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 field\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 field\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 value\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 value\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 entryNumber\cf4 \strokec4  || !\cf6 \strokec6 field\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Entry number and field are required"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getEntriesSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\
\cb3     \cf2 \strokec2 // Find the entry by entry number\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 4\cf4 \strokec4 ] && \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 4\cf4 \strokec4 ].\cf6 \strokec6 toString\cf4 \strokec4 () === \cf6 \strokec6 entryNumber\cf4 \strokec4 .\cf6 \strokec6 toString\cf4 \strokec4 ()) \{\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 columnIndex\cf4 \strokec4 ;\cb1 \
\cb3         \cf5 \strokec5 switch\cf4 \strokec4  (\cf6 \strokec6 field\cf4 \strokec4 ) \{\cb1 \
\cb3           \cf5 \strokec5 case\cf4 \strokec4  \cf8 \strokec8 'artist'\cf4 \strokec4 : \cf6 \strokec6 columnIndex\cf4 \strokec4  = \cf9 \strokec9 2\cf4 \strokec4 ; \cf5 \strokec5 break\cf4 \strokec4 ; \cf2 \strokec2 // Column B\cf4 \cb1 \strokec4 \
\cb3           \cf5 \strokec5 case\cf4 \strokec4  \cf8 \strokec8 'booth'\cf4 \strokec4 : \cf6 \strokec6 columnIndex\cf4 \strokec4  = \cf9 \strokec9 3\cf4 \strokec4 ; \cf5 \strokec5 break\cf4 \strokec4 ;  \cf2 \strokec2 // Column C\cf4 \cb1 \strokec4 \
\cb3           \cf5 \strokec5 case\cf4 \strokec4  \cf8 \strokec8 'category'\cf4 \strokec4 : \cf6 \strokec6 columnIndex\cf4 \strokec4  = \cf9 \strokec9 4\cf4 \strokec4 ; \cf5 \strokec5 break\cf4 \strokec4 ; \cf2 \strokec2 // Column D\cf4 \cb1 \strokec4 \
\cb3           \cf5 \strokec5 case\cf4 \strokec4  \cf8 \strokec8 'cardIssued'\cf4 \strokec4 : \cf6 \strokec6 columnIndex\cf4 \strokec4  = \cf9 \strokec9 6\cf4 \strokec4 ; \cf5 \strokec5 break\cf4 \strokec4 ; \cf2 \strokec2 // Column F\cf4 \cb1 \strokec4 \
\cb3           \cf5 \strokec5 case\cf4 \strokec4  \cf8 \strokec8 'email'\cf4 \strokec4 : \cf6 \strokec6 columnIndex\cf4 \strokec4  = \cf9 \strokec9 7\cf4 \strokec4 ; \cf5 \strokec5 break\cf4 \strokec4 ;   \cf2 \strokec2 // Column G\cf4 \cb1 \strokec4 \
\cb3           \cf5 \strokec5 default\cf4 \strokec4 :\cb1 \
\cb3             \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3               \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Invalid field: "\cf4 \strokec4  + \cf6 \strokec6 field\cf4 \cb1 \strokec4 \
\cb3             \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3         \}\cb1 \
\cb3         \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getRange\cf4 \strokec4 (\cf6 \strokec6 i\cf4 \strokec4  + \cf9 \strokec9 1\cf4 \strokec4 , \cf6 \strokec6 columnIndex\cf4 \strokec4 ).\cf6 \strokec6 setValue\cf4 \strokec4 (\cf6 \strokec6 value\cf4 \strokec4 );\cb1 \
\cb3         \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3           \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 true\cf4 \strokec4 , \cf6 \strokec6 message\cf4 \strokec4 : \cf8 \strokec8 "Entry updated successfully"\cf4 \cb1 \strokec4 \
\cb3         \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Entry not found"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error in updateEntry: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf5 \strokec5 typeof\cf4 \strokec4  \cf6 \strokec6 notifyOnError\cf4 \strokec4  === \cf8 \strokec8 'function'\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf6 \strokec6 notifyOnError\cf4 \strokec4 (\cf8 \strokec8 'updateEntry'\cf4 \strokec4 , \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Failed to update entry: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 deleteEntry\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 entryNumber\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 entryNumber\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 entryNumber\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Entry number is required"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getEntriesSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\
\cb3     \cf2 \strokec2 // Find and delete the entry\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 4\cf4 \strokec4 ] && \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 4\cf4 \strokec4 ].\cf6 \strokec6 toString\cf4 \strokec4 () === \cf6 \strokec6 entryNumber\cf4 \strokec4 .\cf6 \strokec6 toString\cf4 \strokec4 ()) \{\cb1 \
\cb3         \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 deleteRow\cf4 \strokec4 (\cf6 \strokec6 i\cf4 \strokec4  + \cf9 \strokec9 1\cf4 \strokec4 );\cb1 \
\cb3         \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3           \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 true\cf4 \strokec4 , \cf6 \strokec6 message\cf4 \strokec4 : \cf8 \strokec8 "Entry deleted successfully"\cf4 \cb1 \strokec4 \
\cb3         \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Entry not found"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error in deleteEntry: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf5 \strokec5 typeof\cf4 \strokec4  \cf6 \strokec6 notifyOnError\cf4 \strokec4  === \cf8 \strokec8 'function'\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf6 \strokec6 notifyOnError\cf4 \strokec4 (\cf8 \strokec8 'deleteEntry'\cf4 \strokec4 , \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Failed to delete entry: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
}