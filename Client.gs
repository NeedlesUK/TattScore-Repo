{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf200
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red77\green80\blue85;\red246\green247\blue249;\red46\green49\blue51;
\red20\green67\blue174;\red24\green25\blue27;\red186\green6\blue115;\red162\green0\blue16;\red21\green98\blue39;
\red18\green115\blue126;\red97\green3\blue173;}
{\*\expandedcolortbl;;\cssrgb\c37255\c38824\c40784;\cssrgb\c97255\c97647\c98039;\cssrgb\c23529\c25098\c26275;
\cssrgb\c9412\c35294\c73725;\cssrgb\c12549\c12941\c14118;\cssrgb\c78824\c15294\c52549;\cssrgb\c70196\c7843\c7059;\cssrgb\c7451\c45098\c20000;
\cssrgb\c3529\c52157\c56863;\cssrgb\c46275\c15294\c73333;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl400\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // === CLIENT DATA MANAGEMENT FUNCTIONS ===\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getClientDataSheet_\cf4 \strokec4 () \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 ss\cf4 \strokec4  = \cf7 \strokec7 SpreadsheetApp\cf4 \strokec4 .\cf6 \strokec6 openById\cf4 \strokec4 (\cf7 \strokec7 SHEET_ID\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 ss\cf4 \strokec4 .\cf6 \strokec6 getSheetByName\cf4 \strokec4 (\cf8 \strokec8 "Client Data"\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 sheet\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf2 \strokec2 // Create the sheet if it doesn't exist\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 ss\cf4 \strokec4 .\cf6 \strokec6 insertSheet\cf4 \strokec4 (\cf8 \strokec8 "Client Data"\cf4 \strokec4 );\cb1 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 appendRow\cf4 \strokec4 ([\cf8 \strokec8 'Client Name'\cf4 \strokec4 , \cf8 \strokec8 'Email'\cf4 \strokec4 , \cf8 \strokec8 'Phone'\cf4 \strokec4 , \cf8 \strokec8 'Notes'\cf4 \strokec4 , \cf8 \strokec8 'Date Added'\cf4 \strokec4 ]);\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf9 \cb3 \strokec9 /**\cf4 \cb1 \strokec4 \
\cf9 \cb3 \strokec9  * Get client data count (API: action=getClientData)\cf4 \cb1 \strokec4 \
\cf9 \cb3 \strokec9  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getClientData\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getClientDataSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 values\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 count\cf4 \strokec4  = \cf10 \strokec10 0\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf10 \strokec10 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 values\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 values\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf10 \strokec10 0\cf4 \strokec4 ] && \cf6 \strokec6 values\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf10 \strokec10 0\cf4 \strokec4 ].\cf6 \strokec6 toString\cf4 \strokec4 ().\cf6 \strokec6 trim\cf4 \strokec4 () !== \cf8 \strokec8 ""\cf4 \strokec4 ) \cf6 \strokec6 count\cf4 \strokec4 ++;\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{ \cf6 \strokec6 count\cf4 \strokec4 : \cf6 \strokec6 count\cf4 \strokec4  \}))\cb1 \
\cb3       .\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error in getClientData: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{ \cf6 \strokec6 count\cf4 \strokec4 : \cf10 \strokec10 0\cf4 \strokec4  \}))\cb1 \
\cb3       .\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf9 \cb3 \strokec9 /**\cf4 \cb1 \strokec4 \
\cf9 \cb3 \strokec9  * Clear all client data except the header (API: action=clearClientData)\cf4 \cb1 \strokec4 \
\cf9 \cb3 \strokec9  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 clearClientData\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getClientDataSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getLastRow\cf4 \strokec4 () > \cf10 \strokec10 1\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 deleteRows\cf4 \strokec4 (\cf10 \strokec10 2\cf4 \strokec4 , \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getLastRow\cf4 \strokec4 () - \cf10 \strokec10 1\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 true\cf4 \strokec4 , \cf6 \strokec6 message\cf4 \strokec4 : \cf8 \strokec8 "Client data cleared successfully"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error in clearClientData: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf5 \strokec5 typeof\cf4 \strokec4  \cf6 \strokec6 notifyOnError\cf4 \strokec4  === \cf8 \strokec8 'function'\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf6 \strokec6 notifyOnError\cf4 \strokec4 (\cf8 \strokec8 'clearClientData'\cf4 \strokec4 , \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Failed to clear client data: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf9 \cb3 \strokec9 /**\cf4 \cb1 \strokec4 \
\cf9 \cb3 \strokec9  * Delete a client by email (API: action=deleteClient)\cf4 \cb1 \strokec4 \
\cf9 \cb3 \strokec9  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 deleteClient\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 email\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 email\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 email\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Email is required"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getClientDataSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf10 \strokec10 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  ((\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf10 \strokec10 1\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ).\cf6 \strokec6 toString\cf4 \strokec4 ().\cf6 \strokec6 trim\cf4 \strokec4 () === \cf6 \strokec6 email\cf4 \strokec4 ) \{ \cf2 \strokec2 // Email is in column B (index 1)\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 deleteRow\cf4 \strokec4 (\cf6 \strokec6 i\cf4 \strokec4  + \cf10 \strokec10 1\cf4 \strokec4 );\cb1 \
\cb3         \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3           \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 true\cf4 \strokec4 , \cf6 \strokec6 message\cf4 \strokec4 : \cf8 \strokec8 "Client deleted successfully"\cf4 \cb1 \strokec4 \
\cb3         \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Client not found"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error in deleteClient: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf5 \strokec5 typeof\cf4 \strokec4  \cf6 \strokec6 notifyOnError\cf4 \strokec4  === \cf8 \strokec8 'function'\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf6 \strokec6 notifyOnError\cf4 \strokec4 (\cf8 \strokec8 'deleteClient'\cf4 \strokec4 , \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Failed to delete client: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf9 \cb3 \strokec9 /**\cf4 \cb1 \strokec4 \
\cf9 \cb3 \strokec9  * Export all client data as CSV (API: action=exportClientData)\cf4 \cb1 \strokec4 \
\cf9 \cb3 \strokec9  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 exportClientData\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getClientDataSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 values\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\cb3     \cf2 \strokec2 // Convert array to CSV\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 csv\cf4 \strokec4  = \cf6 \strokec6 values\cf4 \strokec4 .\cf6 \strokec6 map\cf4 \strokec4 (\cf6 \strokec6 row\cf4 \strokec4  => \cf6 \strokec6 row\cf4 \strokec4 .\cf6 \strokec6 map\cf4 \strokec4 (\cf6 \strokec6 field\cf4 \strokec4  => \{\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 f\cf4 \strokec4  = (\cf6 \strokec6 field\cf4 \strokec4  == \cf5 \strokec5 null\cf4 \strokec4 ) ? \cf8 \strokec8 ''\cf4 \strokec4  : \cf6 \strokec6 field\cf4 \strokec4 .\cf6 \strokec6 toString\cf4 \strokec4 ();\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 f\cf4 \strokec4 .\cf6 \strokec6 includes\cf4 \strokec4 (\cf8 \strokec8 '"'\cf4 \strokec4 )) \cf6 \strokec6 f\cf4 \strokec4  = \cf6 \strokec6 f\cf4 \strokec4 .\cf6 \strokec6 replace\cf4 \strokec4 (\cf11 \strokec11 /"/\cf5 \strokec5 g\cf4 \strokec4 , \cf8 \strokec8 '""'\cf4 \strokec4 );\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 f\cf4 \strokec4 .\cf6 \strokec6 search\cf4 \strokec4 (\cf11 \strokec11 /("|,|\\n)/\cf5 \strokec5 g\cf4 \strokec4 ) >= \cf10 \strokec10 0\cf4 \strokec4 ) \cf6 \strokec6 f\cf4 \strokec4  = \cf8 \strokec8 '"'\cf4 \strokec4  + \cf6 \strokec6 f\cf4 \strokec4  + \cf8 \strokec8 '"'\cf4 \strokec4 ;\cb1 \
\cb3       \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 f\cf4 \strokec4 ;\cb1 \
\cb3     \}).\cf6 \strokec6 join\cf4 \strokec4 (\cf8 \strokec8 ","\cf4 \strokec4 )).\cf6 \strokec6 join\cf4 \strokec4 (\cf8 \strokec8 "\\r\\n"\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf6 \strokec6 csv\cf4 \strokec4 )\cb1 \
\cb3       .\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 CSV\cf4 \strokec4 );\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf8 \strokec8 "Error exporting client data: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 )\cb1 \
\cb3       .\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 TEXT\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
}