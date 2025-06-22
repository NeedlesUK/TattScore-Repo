{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf200
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red77\green80\blue85;\red246\green247\blue249;\red46\green49\blue51;
\red20\green67\blue174;\red24\green25\blue27;\red186\green6\blue115;\red162\green0\blue16;\red18\green115\blue126;
\red97\green3\blue173;}
{\*\expandedcolortbl;;\cssrgb\c37255\c38824\c40784;\cssrgb\c97255\c97647\c98039;\cssrgb\c23529\c25098\c26275;
\cssrgb\c9412\c35294\c73725;\cssrgb\c12549\c12941\c14118;\cssrgb\c78824\c15294\c52549;\cssrgb\c70196\c7843\c7059;\cssrgb\c3529\c52157\c56863;
\cssrgb\c46275\c15294\c73333;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl400\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // === CONSENT FORM & CLIENT DATA MANAGEMENT FUNCTIONS ===\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getClientDataSheet_\cf4 \strokec4 () \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 ss\cf4 \strokec4  = \cf7 \strokec7 SpreadsheetApp\cf4 \strokec4 .\cf6 \strokec6 openById\cf4 \strokec4 (\cf7 \strokec7 SHEET_ID\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 ss\cf4 \strokec4 .\cf6 \strokec6 getSheetByName\cf4 \strokec4 (\cf8 \strokec8 "Client Data"\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 sheet\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 ss\cf4 \strokec4 .\cf6 \strokec6 insertSheet\cf4 \strokec4 (\cf8 \strokec8 "Client Data"\cf4 \strokec4 );\cb1 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 appendRow\cf4 \strokec4 ([\cf8 \strokec8 'Client Name'\cf4 \strokec4 , \cf8 \strokec8 'Email'\cf4 \strokec4 , \cf8 \strokec8 'Phone'\cf4 \strokec4 , \cf8 \strokec8 'Notes'\cf4 \strokec4 , \cf8 \strokec8 'Date Added'\cf4 \strokec4 ]);\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 \strokec2 // Helper: Med History & Consent sheet\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getMedHistoryConsentSheet_\cf4 \strokec4 () \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 ss\cf4 \strokec4  = \cf7 \strokec7 SpreadsheetApp\cf4 \strokec4 .\cf6 \strokec6 openById\cf4 \strokec4 (\cf7 \strokec7 SHEET_ID\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 ss\cf4 \strokec4 .\cf6 \strokec6 getSheetByName\cf4 \strokec4 (\cf8 \strokec8 "Med History & Consent"\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 sheet\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 ss\cf4 \strokec4 .\cf6 \strokec6 insertSheet\cf4 \strokec4 (\cf8 \strokec8 "Med History & Consent"\cf4 \strokec4 );\cb1 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 appendRow\cf4 \strokec4 ([\cb1 \
\cb3       \cf8 \strokec8 'Timestamp'\cf4 \strokec4 , \cf8 \strokec8 'Client Name'\cf4 \strokec4 , \cf8 \strokec8 'Client Email'\cf4 \strokec4 , \cf8 \strokec8 'Artist Name'\cf4 \strokec4 , \cf8 \strokec8 'Artist Email'\cf4 \strokec4 ,\cb1 \
\cb3       \cf8 \strokec8 'DOB'\cf4 \strokec4 , \cf8 \strokec8 'Phone'\cf4 \strokec4 , \cf8 \strokec8 'Full Address'\cf4 \strokec4 , \cf8 \strokec8 'Age Confirm'\cf4 \strokec4 , \cf8 \strokec8 'Risk Confirm'\cf4 \strokec4 ,\cb1 \
\cb3       \cf8 \strokec8 'Liability Confirm'\cf4 \strokec4 , \cf8 \strokec8 'Media Release'\cf4 \strokec4 , \cf8 \strokec8 'No Issues'\cf4 \strokec4 , \cf8 \strokec8 'Medical Issues'\cf4 \strokec4 ,\cb1 \
\cb3       \cf8 \strokec8 'Medical Details'\cf4 \strokec4 , \cf8 \strokec8 'Aftercare Advice'\cf4 \strokec4 , \cf8 \strokec8 'Eat Before'\cf4 \strokec4 , \cf8 \strokec8 'Unwell'\cf4 \strokec4 ,\cb1 \
\cb3       \cf8 \strokec8 'No Alcohol'\cf4 \strokec4 , \cf8 \strokec8 'Marketing Consent'\cf4 \strokec4 , \cf8 \strokec8 'ID Photo URL'\cf4 \strokec4 , \cf8 \strokec8 'ID Photo Name'\cf4 \strokec4 , \cf8 \strokec8 'ID Photo Id'\cf4 \cb1 \strokec4 \
\cb3     ]);\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 \strokec2 // Helper: Save file to Google Drive (for ID photos)\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 saveFileToDrive\cf4 \strokec4 (\cf6 \strokec6 fileBlob\cf4 \strokec4 , \cf6 \strokec6 fileName\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (!\cf7 \strokec7 ID_PHOTOS_FOLDER_ID\cf4 \strokec4  || \cf7 \strokec7 ID_PHOTOS_FOLDER_ID\cf4 \strokec4  === \cf8 \strokec8 'YOUR_GOOGLE_DRIVE_FOLDER_ID'\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf5 \strokec5 throw\cf4 \strokec4  \cf5 \strokec5 new\cf4 \strokec4  \cf7 \strokec7 Error\cf4 \strokec4 (\cf8 \strokec8 "Google Drive Folder ID for ID photos is not configured."\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 folder\cf4 \strokec4  = \cf7 \strokec7 DriveApp\cf4 \strokec4 .\cf6 \strokec6 getFolderById\cf4 \strokec4 (\cf7 \strokec7 ID_PHOTOS_FOLDER_ID\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 file\cf4 \strokec4  = \cf6 \strokec6 folder\cf4 \strokec4 .\cf6 \strokec6 createFile\cf4 \strokec4 (\cf6 \strokec6 fileBlob\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \{\cb1 \
\cb3       \cf6 \strokec6 url\cf4 \strokec4 : \cf6 \strokec6 file\cf4 \strokec4 .\cf6 \strokec6 getUrl\cf4 \strokec4 (),\cb1 \
\cb3       \cf6 \strokec6 name\cf4 \strokec4 : \cf6 \strokec6 file\cf4 \strokec4 .\cf6 \strokec6 getName\cf4 \strokec4 (),\cb1 \
\cb3       \cf6 \strokec6 id\cf4 \strokec4 : \cf6 \strokec6 file\cf4 \strokec4 .\cf6 \strokec6 getId\cf4 \strokec4 ()\cb1 \
\cb3     \};\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error saving file to Drive: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf5 \strokec5 typeof\cf4 \strokec4  \cf6 \strokec6 notifyOnError\cf4 \strokec4  === \cf8 \strokec8 'function'\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf6 \strokec6 notifyOnError\cf4 \strokec4 (\cf8 \strokec8 'saveFileToDrive'\cf4 \strokec4 , \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 throw\cf4 \strokec4  \cf6 \strokec6 err\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 \strokec2 // Add client to Client Data sheet\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 addToClientData_\cf4 \strokec4 (\cf6 \strokec6 name\cf4 \strokec4 , \cf6 \strokec6 email\cf4 \strokec4 , \cf6 \strokec6 phone\cf4 \strokec4 , \cf6 \strokec6 notes\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getClientDataSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 timestamp\cf4 \strokec4  = \cf5 \strokec5 new\cf4 \strokec4  \cf7 \strokec7 Date\cf4 \strokec4 ();\cb1 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 appendRow\cf4 \strokec4 ([\cf6 \strokec6 name\cf4 \strokec4 , \cf6 \strokec6 email\cf4 \strokec4 , \cf6 \strokec6 phone\cf4 \strokec4 , \cf6 \strokec6 notes\cf4 \strokec4 , \cf6 \strokec6 timestamp\cf4 \strokec4 ]);\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf5 \strokec5 true\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error adding to client data: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf5 \strokec5 false\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 \strokec2 // Clear all client data except header\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 clearClientData\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getClientDataSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getLastRow\cf4 \strokec4 () > \cf9 \strokec9 1\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 deleteRows\cf4 \strokec4 (\cf9 \strokec9 2\cf4 \strokec4 , \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getLastRow\cf4 \strokec4 () - \cf9 \strokec9 1\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 true\cf4 \strokec4 , \cf6 \strokec6 message\cf4 \strokec4 : \cf8 \strokec8 "Client data cleared successfully"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\
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
\cf2 \cb3 \strokec2 // Delete a client by email\cf4 \cb1 \strokec4 \
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
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  ((\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 1\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ).\cf6 \strokec6 toString\cf4 \strokec4 ().\cf6 \strokec6 trim\cf4 \strokec4 () === \cf6 \strokec6 email\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 deleteRow\cf4 \strokec4 (\cf6 \strokec6 i\cf4 \strokec4  + \cf9 \strokec9 1\cf4 \strokec4 );\cb1 \
\cb3         \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3           \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 true\cf4 \strokec4 , \cf6 \strokec6 message\cf4 \strokec4 : \cf8 \strokec8 "Client deleted successfully"\cf4 \cb1 \strokec4 \
\cb3         \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Client not found"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\
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
\cf2 \cb3 \strokec2 // Import clients from Consent sheet if consent given\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 importConsentClients\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 ss\cf4 \strokec4  = \cf7 \strokec7 SpreadsheetApp\cf4 \strokec4 .\cf6 \strokec6 openById\cf4 \strokec4 (\cf7 \strokec7 SHEET_ID\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 consentSheet\cf4 \strokec4  = \cf6 \strokec6 ss\cf4 \strokec4 .\cf6 \strokec6 getSheetByName\cf4 \strokec4 (\cf8 \strokec8 "Med History & Consent"\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 clientSheet\cf4 \strokec4  = \cf6 \strokec6 getClientDataSheet_\cf4 \strokec4 ();\cb1 \
\
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 consentData\cf4 \strokec4  = \cf6 \strokec6 consentSheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 clientData\cf4 \strokec4  = \cf6 \strokec6 clientSheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\
\cb3     \cf2 \strokec2 // Map of existing emails (case-insensitive)\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 existing\cf4 \strokec4  = \{\};\cb1 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 clientData\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 email\cf4 \strokec4  = (\cf6 \strokec6 clientData\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 1\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ).\cf6 \strokec6 toString\cf4 \strokec4 ().\cf6 \strokec6 trim\cf4 \strokec4 ().\cf6 \strokec6 toLowerCase\cf4 \strokec4 ();\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 email\cf4 \strokec4 ) \cf6 \strokec6 existing\cf4 \strokec4 [\cf6 \strokec6 email\cf4 \strokec4 ] = \cf5 \strokec5 true\cf4 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 headers\cf4 \strokec4  = \cf6 \strokec6 consentData\cf4 \strokec4 [\cf9 \strokec9 0\cf4 \strokec4 ].\cf6 \strokec6 map\cf4 \strokec4 (\cf7 \strokec7 String\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 nameCol\cf4 \strokec4  = \cf6 \strokec6 headers\cf4 \strokec4 .\cf6 \strokec6 findIndex\cf4 \strokec4 (\cf6 \strokec6 h\cf4 \strokec4  => \cf10 \strokec10 /name/\cf5 \strokec5 i\cf4 \strokec4 .\cf6 \strokec6 test\cf4 \strokec4 (\cf6 \strokec6 h\cf4 \strokec4 ));\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 emailCol\cf4 \strokec4  = \cf6 \strokec6 headers\cf4 \strokec4 .\cf6 \strokec6 findIndex\cf4 \strokec4 (\cf6 \strokec6 h\cf4 \strokec4  => \cf10 \strokec10 /email/\cf5 \strokec5 i\cf4 \strokec4 .\cf6 \strokec6 test\cf4 \strokec4 (\cf6 \strokec6 h\cf4 \strokec4 ));\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 shareCol\cf4 \strokec4  = \cf6 \strokec6 headers\cf4 \strokec4 .\cf6 \strokec6 findIndex\cf4 \strokec4 (\cf6 \strokec6 h\cf4 \strokec4  => \cf10 \strokec10 /consent|share/\cf5 \strokec5 i\cf4 \strokec4 .\cf6 \strokec6 test\cf4 \strokec4 (\cf6 \strokec6 h\cf4 \strokec4 ));\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 shareCol\cf4 \strokec4  === -\cf9 \strokec9 1\cf4 \strokec4 ) \cf6 \strokec6 shareCol\cf4 \strokec4  = \cf9 \strokec9 19\cf4 \strokec4 ; \cf2 \strokec2 // fallback to column T\cf4 \cb1 \strokec4 \
\
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 added\cf4 \strokec4  = \cf9 \strokec9 0\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 consentData\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 share\cf4 \strokec4  = (\cf6 \strokec6 consentData\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf6 \strokec6 shareCol\cf4 \strokec4 ] || \cf6 \strokec6 consentData\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 19\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ).\cf6 \strokec6 toString\cf4 \strokec4 ().\cf6 \strokec6 trim\cf4 \strokec4 ().\cf6 \strokec6 toLowerCase\cf4 \strokec4 ();\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 share\cf4 \strokec4  === \cf8 \strokec8 "yes"\cf4 \strokec4  || \cf6 \strokec6 share\cf4 \strokec4  === \cf8 \strokec8 "y"\cf4 \strokec4  || \cf6 \strokec6 share\cf4 \strokec4  === \cf8 \strokec8 "true"\cf4 \strokec4  || \cf6 \strokec6 share\cf4 \strokec4  === \cf8 \strokec8 "agreed"\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 name\cf4 \strokec4  = (\cf6 \strokec6 consentData\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf6 \strokec6 nameCol\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ).\cf6 \strokec6 toString\cf4 \strokec4 ().\cf6 \strokec6 trim\cf4 \strokec4 ();\cb1 \
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 email\cf4 \strokec4  = (\cf6 \strokec6 consentData\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf6 \strokec6 emailCol\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ).\cf6 \strokec6 toString\cf4 \strokec4 ().\cf6 \strokec6 trim\cf4 \strokec4 ().\cf6 \strokec6 toLowerCase\cf4 \strokec4 ();\cb1 \
\cb3         \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 email\cf4 \strokec4  && !\cf6 \strokec6 existing\cf4 \strokec4 [\cf6 \strokec6 email\cf4 \strokec4 ]) \{\cb1 \
\cb3           \cf6 \strokec6 clientSheet\cf4 \strokec4 .\cf6 \strokec6 appendRow\cf4 \strokec4 ([\cf6 \strokec6 name\cf4 \strokec4 , \cf6 \strokec6 email\cf4 \strokec4 , \cf8 \strokec8 ''\cf4 \strokec4 , \cf8 \strokec8 ''\cf4 \strokec4 , \cf5 \strokec5 new\cf4 \strokec4  \cf7 \strokec7 Date\cf4 \strokec4 ()]);\cb1 \
\cb3           \cf6 \strokec6 existing\cf4 \strokec4 [\cf6 \strokec6 email\cf4 \strokec4 ] = \cf5 \strokec5 true\cf4 \strokec4 ;\cb1 \
\cb3           \cf6 \strokec6 added\cf4 \strokec4 ++;\cb1 \
\cb3         \}\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 true\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 count\cf4 \strokec4 : \cf6 \strokec6 added\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 message\cf4 \strokec4 : \cf8 \strokec8 "Imported "\cf4 \strokec4  + \cf6 \strokec6 added\cf4 \strokec4  + \cf8 \strokec8 " new clients from consent sheet."\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error in importConsentClients: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Failed to import client data: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 \strokec2 // Consent form submission API handler\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 submitConsent\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Starting submitConsent with parameters: "\cf4 \strokec4  + \cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 ));\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 eventKey\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 eventKey\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 eventName\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 eventName\cf4 \strokec4  || \cf6 \strokec6 eventKey\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 eventKey\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Missing eventKey!"\cf4 \strokec4 );\cb1 \
\cb3       \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3         \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 ,\cb1 \
\cb3         \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Missing eventKey"\cf4 \cb1 \strokec4 \
\cb3       \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf2 \strokec2 // Extract form data\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 clientName\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 clientName\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 clientEmail\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 clientEmail\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 artistName\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 artistName\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 artistEmail\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 artistEmail\cf4 \strokec4  || \cf8 \strokec8 ''\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 dob\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf7 \strokec7 DOB\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 phone\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf7 \strokec7 Phone\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 address\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf7 \strokec7 FullAddress\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 ageConfirm\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 ageConfirm\cf4 \strokec4  === \cf8 \strokec8 'true'\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 riskConfirm\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 riskConfirm\cf4 \strokec4  === \cf8 \strokec8 'true'\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 liabilityConfirm\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 liabilityConfirm\cf4 \strokec4  === \cf8 \strokec8 'true'\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 mediaRelease\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 mediaRelease\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 noIssues\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 noIssues\cf4 \strokec4  === \cf8 \strokec8 'true'\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 medicalIssues\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 medicalIssues\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 medicalDetails\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 medicalDetails\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 aftercareAdvice\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 aftercareAdvice\cf4 \strokec4  === \cf8 \strokec8 'true'\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 eatBefore\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 eatBefore\cf4 \strokec4  === \cf8 \strokec8 'true'\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 unwell\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 unwell\cf4 \strokec4  === \cf8 \strokec8 'true'\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 noAlcohol\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 noAlcohol\cf4 \strokec4  === \cf8 \strokec8 'true'\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 marketingConsent\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 marketingConsent\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 idPhotoUrl\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 idPhotoUrl\cf4 \strokec4  || \cf8 \strokec8 ''\cf4 \strokec4 ;\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "ID Photo URL: "\cf4 \strokec4  + \cf6 \strokec6 idPhotoUrl\cf4 \strokec4 );\cb1 \
\
\cb3     \cf2 \strokec2 // Validate required fields\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 clientName\cf4 \strokec4  || !\cf6 \strokec6 clientEmail\cf4 \strokec4  || !\cf6 \strokec6 artistName\cf4 \strokec4  || !\cf6 \strokec6 dob\cf4 \strokec4  || !\cf6 \strokec6 phone\cf4 \strokec4  || !\cf6 \strokec6 address\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Missing required fields"\cf4 \strokec4 );\cb1 \
\cb3       \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3         \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 ,\cb1 \
\cb3         \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Missing required fields"\cf4 \cb1 \strokec4 \
\cb3       \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf2 \strokec2 // Save to Consent Forms sheet\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getMedHistoryConsentSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 timestamp\cf4 \strokec4  = \cf5 \strokec5 new\cf4 \strokec4  \cf7 \strokec7 Date\cf4 \strokec4 ();\cb1 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 appendRow\cf4 \strokec4 ([\cb1 \
\cb3       \cf6 \strokec6 timestamp\cf4 \strokec4 , \cf6 \strokec6 clientName\cf4 \strokec4 , \cf6 \strokec6 clientEmail\cf4 \strokec4 , \cf6 \strokec6 artistName\cf4 \strokec4 , \cf6 \strokec6 artistEmail\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 dob\cf4 \strokec4 , \cf6 \strokec6 phone\cf4 \strokec4 , \cf6 \strokec6 address\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 ageConfirm\cf4 \strokec4  ? \cf8 \strokec8 'Yes'\cf4 \strokec4  : \cf8 \strokec8 'No'\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 riskConfirm\cf4 \strokec4  ? \cf8 \strokec8 'Yes'\cf4 \strokec4  : \cf8 \strokec8 'No'\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 liabilityConfirm\cf4 \strokec4  ? \cf8 \strokec8 'Yes'\cf4 \strokec4  : \cf8 \strokec8 'No'\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 mediaRelease\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 noIssues\cf4 \strokec4  ? \cf8 \strokec8 'Yes'\cf4 \strokec4  : \cf8 \strokec8 'No'\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 medicalIssues\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 medicalDetails\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 aftercareAdvice\cf4 \strokec4  ? \cf8 \strokec8 'Yes'\cf4 \strokec4  : \cf8 \strokec8 'No'\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 eatBefore\cf4 \strokec4  ? \cf8 \strokec8 'Yes'\cf4 \strokec4  : \cf8 \strokec8 'No'\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 unwell\cf4 \strokec4  ? \cf8 \strokec8 'Yes'\cf4 \strokec4  : \cf8 \strokec8 'No'\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 noAlcohol\cf4 \strokec4  ? \cf8 \strokec8 'Yes'\cf4 \strokec4  : \cf8 \strokec8 'No'\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 marketingConsent\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 idPhotoUrl\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 idPhotoUrl\cf4 \strokec4  ? \cf8 \strokec8 'ID Photo'\cf4 \strokec4  : \cf8 \strokec8 ''\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 idPhotoUrl\cf4 \strokec4  ? \cf8 \strokec8 'Uploadcare'\cf4 \strokec4  : \cf8 \strokec8 ''\cf4 \cb1 \strokec4 \
\cb3     ]);\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Saved to Consent Forms sheet"\cf4 \strokec4 );\cb1 \
\
\cb3     \cf2 \strokec2 // Add to Client Data sheet\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 addToClientData_\cf4 \strokec4 (\cf6 \strokec6 clientName\cf4 \strokec4 , \cf6 \strokec6 clientEmail\cf4 \strokec4 , \cf6 \strokec6 phone\cf4 \strokec4 , \cf8 \strokec8 "Consent form submitted"\cf4 \strokec4 );\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Added to Client Data sheet"\cf4 \strokec4 );\cb1 \
\
\cb3     \cf2 \strokec2 // Send confirmation emails\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 clientEmailSent\cf4 \strokec4  = \cf6 \strokec6 sendClientConfirmationEmail_\cf4 \strokec4 (\cb1 \
\cb3       \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 , \cf6 \strokec6 eventKey\cf4 \strokec4 , \cf6 \strokec6 eventName\cf4 \cb1 \strokec4 \
\cb3     );\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Client confirmation email sent: "\cf4 \strokec4  + \cf6 \strokec6 clientEmailSent\cf4 \strokec4 );\cb1 \
\
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 aftercareEmailSent\cf4 \strokec4  = \cf6 \strokec6 sendClientAftercareEmail_\cf4 \strokec4 (\cb1 \
\cb3       \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 , \cf6 \strokec6 eventKey\cf4 \strokec4 , \cf6 \strokec6 eventName\cf4 \cb1 \strokec4 \
\cb3     );\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Client aftercare email sent: "\cf4 \strokec4  + \cf6 \strokec6 aftercareEmailSent\cf4 \strokec4 );\cb1 \
\
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 artistEmailSent\cf4 \strokec4  = \cf6 \strokec6 sendArtistConsentDetailsEmail\cf4 \strokec4 (\cb1 \
\cb3       \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 , \cf6 \strokec6 eventKey\cf4 \strokec4 , \cf6 \strokec6 eventName\cf4 \cb1 \strokec4 \
\cb3     );\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Artist notification email sent: "\cf4 \strokec4  + \cf6 \strokec6 artistEmailSent\cf4 \strokec4 );\cb1 \
\
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 true\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 message\cf4 \strokec4 : \cf8 \strokec8 "Consent form submitted successfully"\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 emailsSent\cf4 \strokec4 : \{\cb1 \
\cb3         \cf6 \strokec6 client\cf4 \strokec4 : \cf6 \strokec6 clientEmailSent\cf4 \strokec4 ,\cb1 \
\cb3         \cf6 \strokec6 aftercare\cf4 \strokec4 : \cf6 \strokec6 aftercareEmailSent\cf4 \strokec4 ,\cb1 \
\cb3         \cf6 \strokec6 artist\cf4 \strokec4 : \cf6 \strokec6 artistEmailSent\cf4 \cb1 \strokec4 \
\cb3       \}\cb1 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error in submitConsent: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4  + \cf8 \strokec8 "\\n"\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 .\cf6 \strokec6 stack\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Failed to submit consent form: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
}