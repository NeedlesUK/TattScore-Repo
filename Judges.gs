{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf200
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red77\green80\blue85;\red246\green247\blue249;\red46\green49\blue51;
\red20\green67\blue174;\red24\green25\blue27;\red186\green6\blue115;\red162\green0\blue16;\red18\green115\blue126;
\red21\green98\blue39;\red97\green3\blue173;}
{\*\expandedcolortbl;;\cssrgb\c37255\c38824\c40784;\cssrgb\c97255\c97647\c98039;\cssrgb\c23529\c25098\c26275;
\cssrgb\c9412\c35294\c73725;\cssrgb\c12549\c12941\c14118;\cssrgb\c78824\c15294\c52549;\cssrgb\c70196\c7843\c7059;\cssrgb\c3529\c52157\c56863;
\cssrgb\c7451\c45098\c20000;\cssrgb\c46275\c15294\c73333;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl400\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // === JUDGE MANAGEMENT FUNCTIONS WITH EMAIL SUPPORT AND AUTO EMAIL LINK ===\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getJudgesSheet_\cf4 \strokec4 () \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 ss\cf4 \strokec4  = \cf7 \strokec7 SpreadsheetApp\cf4 \strokec4 .\cf6 \strokec6 openById\cf4 \strokec4 (\cf7 \strokec7 SHEET_ID\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 ss\cf4 \strokec4 .\cf6 \strokec6 getSheetByName\cf4 \strokec4 (\cf8 \strokec8 "Judges"\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 sheet\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 ss\cf4 \strokec4 .\cf6 \strokec6 insertSheet\cf4 \strokec4 (\cf8 \strokec8 "Judges"\cf4 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 // Must match your actual header order!\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 appendRow\cf4 \strokec4 ([\cf8 \strokec8 'Name'\cf4 \strokec4 , \cf8 \strokec8 'Token'\cf4 \strokec4 , \cf8 \strokec8 'Email'\cf4 \strokec4 , \cf8 \strokec8 'Created'\cf4 \strokec4 ]);\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getJudges\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getJudgesSheet_\cf4 \strokec4 ();\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 judges\cf4 \strokec4  = [];\cb1 \
\cb3   \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3     \cf6 \strokec6 judges\cf4 \strokec4 .\cf6 \strokec6 push\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 name\cf4 \strokec4 : \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 0\cf4 \strokec4 ] || \cf8 \strokec8 ""\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 token\cf4 \strokec4 : \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 1\cf4 \strokec4 ] || \cf8 \strokec8 ""\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 email\cf4 \strokec4 : \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 2\cf4 \strokec4 ] || \cf8 \strokec8 ""\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 created\cf4 \strokec4 : \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 3\cf4 \strokec4 ] || \cf8 \strokec8 ""\cf4 \cb1 \strokec4 \
\cb3     \});\cb1 \
\cb3   \}\cb1 \
\cb3   \cf2 \strokec2 // Return just the array!\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\cf6 \strokec6 judges\cf4 \strokec4 ))\cb1 \
\cb3     .\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf10 \cb3 \strokec10 /**\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  * Add a judge with name and email, and optionally send them the judging link email if requested.\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  * Expects: judgeName, judgeEmail, eventKey, [sendEmail] (if present and true, sends the email)\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 addJudgeJSON\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 judgeName\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4  ? \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 judgeName\cf4 \strokec4  : \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 judgeName\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 judgeEmail\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4  ? \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 judgeEmail\cf4 \strokec4  : \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 judgeEmail\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 eventKey\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4  ? \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 eventKey\cf4 \strokec4  : \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 eventKey\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sendEmail\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4  ? \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 sendEmail\cf4 \strokec4  : \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 sendEmail\cf4 \strokec4 ; \cf2 \strokec2 // "true" or "false"\cf4 \cb1 \strokec4 \
\
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 judgeName\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Judge name is required"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getJudgesSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\
\cb3     \cf2 \strokec2 // Check if judge already exists (by name, case-insensitive)\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  ((\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 0\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ).\cf6 \strokec6 toString\cf4 \strokec4 ().\cf6 \strokec6 trim\cf4 \strokec4 ().\cf6 \strokec6 toLowerCase\cf4 \strokec4 () === \cf6 \strokec6 judgeName\cf4 \strokec4 .\cf6 \strokec6 toLowerCase\cf4 \strokec4 ()) \{\cb1 \
\cb3         \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3           \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Judge already exists"\cf4 \cb1 \strokec4 \
\cb3         \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf2 \strokec2 // Add new judge: [Name, Token, Email, Created]\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 appendRow\cf4 \strokec4 ([\cf6 \strokec6 judgeName\cf4 \strokec4 , \cf8 \strokec8 ''\cf4 \strokec4 , \cf6 \strokec6 judgeEmail\cf4 \strokec4  || \cf8 \strokec8 ''\cf4 \strokec4 , \cf5 \strokec5 new\cf4 \strokec4  \cf7 \strokec7 Date\cf4 \strokec4 ()]);\cb1 \
\
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 resp\cf4 \strokec4  = \{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 true\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 message\cf4 \strokec4 : \cf8 \strokec8 "Judge added successfully"\cf4 \cb1 \strokec4 \
\cb3     \};\cb1 \
\
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 sendEmail\cf4 \strokec4  && \cf6 \strokec6 sendEmail\cf4 \strokec4  === \cf8 \strokec8 "true"\cf4 \strokec4  && \cf6 \strokec6 judgeEmail\cf4 \strokec4  && \cf6 \strokec6 eventKey\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 mailResult\cf4 \strokec4  = \cf6 \strokec6 sendJudgeLinkEmail_\cf4 \strokec4 (\{\cb1 \
\cb3         \cf6 \strokec6 judgeName\cf4 \strokec4 : \cf6 \strokec6 judgeName\cf4 \strokec4 ,\cb1 \
\cb3         \cf6 \strokec6 judgeEmail\cf4 \strokec4 : \cf6 \strokec6 judgeEmail\cf4 \strokec4 ,\cb1 \
\cb3         \cf6 \strokec6 eventKey\cf4 \strokec4 : \cf6 \strokec6 eventKey\cf4 \cb1 \strokec4 \
\cb3       \});\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 mailResult\cf4 \strokec4 .\cf6 \strokec6 success\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf6 \strokec6 resp\cf4 \strokec4 .\cf6 \strokec6 emailSent\cf4 \strokec4  = \cf5 \strokec5 true\cf4 \strokec4 ;\cb1 \
\cb3       \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3         \cf6 \strokec6 resp\cf4 \strokec4 .\cf6 \strokec6 emailSent\cf4 \strokec4  = \cf5 \strokec5 false\cf4 \strokec4 ;\cb1 \
\cb3         \cf6 \strokec6 resp\cf4 \strokec4 .\cf6 \strokec6 emailError\cf4 \strokec4  = \cf6 \strokec6 mailResult\cf4 \strokec4 .\cf6 \strokec6 error\cf4 \strokec4 ;\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\cf6 \strokec6 resp\cf4 \strokec4 )).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error in addJudgeJSON: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf5 \strokec5 typeof\cf4 \strokec4  \cf6 \strokec6 notifyOnError\cf4 \strokec4  === \cf8 \strokec8 'function'\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf6 \strokec6 notifyOnError\cf4 \strokec4 (\cf8 \strokec8 'addJudgeJSON'\cf4 \strokec4 , \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Failed to add judge: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf10 \cb3 \strokec10 /**\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  * Delete a judge by name\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 deleteJudgeJSON\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 judgeName\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4  ? \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 judgeName\cf4 \strokec4  : \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 judgeName\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 judgeName\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Judge name is required"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getJudgesSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\
\cb3     \cf2 \strokec2 // Find and delete the judge (by name, case-insensitive)\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  ((\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 0\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ).\cf6 \strokec6 toString\cf4 \strokec4 ().\cf6 \strokec6 trim\cf4 \strokec4 ().\cf6 \strokec6 toLowerCase\cf4 \strokec4 () === \cf6 \strokec6 judgeName\cf4 \strokec4 .\cf6 \strokec6 toLowerCase\cf4 \strokec4 ()) \{\cb1 \
\cb3         \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 deleteRow\cf4 \strokec4 (\cf6 \strokec6 i\cf4 \strokec4  + \cf9 \strokec9 1\cf4 \strokec4 );\cb1 \
\cb3         \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3           \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 true\cf4 \strokec4 , \cf6 \strokec6 message\cf4 \strokec4 : \cf8 \strokec8 "Judge deleted successfully"\cf4 \cb1 \strokec4 \
\cb3         \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Judge not found"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error in deleteJudgeJSON: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf5 \strokec5 typeof\cf4 \strokec4  \cf6 \strokec6 notifyOnError\cf4 \strokec4  === \cf8 \strokec8 'function'\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf6 \strokec6 notifyOnError\cf4 \strokec4 (\cf8 \strokec8 'deleteJudgeJSON'\cf4 \strokec4 , \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Failed to delete judge: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf10 \cb3 \strokec10 /**\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  * Get a judge's token by name\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getJudgeTokenJSON\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 judgeName\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4  ? \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 judgeName\cf4 \strokec4  : \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 judgeName\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 judgeName\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Judge name is required"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getJudgesSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\
\cb3     \cf2 \strokec2 // Find judge and return token\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  ((\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 0\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ).\cf6 \strokec6 toString\cf4 \strokec4 ().\cf6 \strokec6 trim\cf4 \strokec4 ().\cf6 \strokec6 toLowerCase\cf4 \strokec4 () === \cf6 \strokec6 judgeName\cf4 \strokec4 .\cf6 \strokec6 toLowerCase\cf4 \strokec4 ()) \{\cb1 \
\cb3         \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3           \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 true\cf4 \strokec4 , \cf6 \strokec6 token\cf4 \strokec4 : \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 1\cf4 \strokec4 ] || \cf5 \strokec5 null\cf4 \cb1 \strokec4 \
\cb3         \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Judge not found"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error in getJudgeTokenJSON: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf5 \strokec5 typeof\cf4 \strokec4  \cf6 \strokec6 notifyOnError\cf4 \strokec4  === \cf8 \strokec8 'function'\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf6 \strokec6 notifyOnError\cf4 \strokec4 (\cf8 \strokec8 'getJudgeTokenJSON'\cf4 \strokec4 , \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Failed to get judge token: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf10 \cb3 \strokec10 /**\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  * Generate a judge token (UUID) and optionally send the link by email if judgeEmail is provided\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 generateTokenJSON\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 judgeName\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4  ? \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 judgeName\cf4 \strokec4  : \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 judgeName\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 judgeEmail\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4  ? \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 judgeEmail\cf4 \strokec4  : \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 judgeEmail\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 eventKey\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4  ? \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 eventKey\cf4 \strokec4  : \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 eventKey\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sendEmail\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4  ? \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 sendEmail\cf4 \strokec4  : \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 sendEmail\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 judgeName\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Judge name is required"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getJudgesSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 newToken\cf4 \strokec4  = \cf7 \strokec7 Utilities\cf4 \strokec4 .\cf6 \strokec6 getUuid\cf4 \strokec4 ();\cb1 \
\
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  ((\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 0\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ).\cf6 \strokec6 toString\cf4 \strokec4 ().\cf6 \strokec6 trim\cf4 \strokec4 ().\cf6 \strokec6 toLowerCase\cf4 \strokec4 () === \cf6 \strokec6 judgeName\cf4 \strokec4 .\cf6 \strokec6 toLowerCase\cf4 \strokec4 ()) \{\cb1 \
\cb3         \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getRange\cf4 \strokec4 (\cf6 \strokec6 i\cf4 \strokec4  + \cf9 \strokec9 1\cf4 \strokec4 , \cf9 \strokec9 2\cf4 \strokec4 ).\cf6 \strokec6 setValue\cf4 \strokec4 (\cf6 \strokec6 newToken\cf4 \strokec4 ); \cf2 \strokec2 // Update token column\cf4 \cb1 \strokec4 \
\
\cb3         \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 resp\cf4 \strokec4  = \{\cb1 \
\cb3           \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 true\cf4 \strokec4 ,\cb1 \
\cb3           \cf6 \strokec6 token\cf4 \strokec4 : \cf6 \strokec6 newToken\cf4 \cb1 \strokec4 \
\cb3         \};\cb1 \
\
\cb3         \cf2 \strokec2 // Optionally send email\cf4 \cb1 \strokec4 \
\cb3         \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 sendEmail\cf4 \strokec4  && \cf6 \strokec6 sendEmail\cf4 \strokec4  === \cf8 \strokec8 "true"\cf4 \strokec4  && \cf6 \strokec6 judgeEmail\cf4 \strokec4  && \cf6 \strokec6 eventKey\cf4 \strokec4 ) \{\cb1 \
\cb3           \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 mailResult\cf4 \strokec4  = \cf6 \strokec6 sendJudgeLinkEmail_\cf4 \strokec4 (\{\cb1 \
\cb3             \cf6 \strokec6 judgeName\cf4 \strokec4 : \cf6 \strokec6 judgeName\cf4 \strokec4 ,\cb1 \
\cb3             \cf6 \strokec6 judgeEmail\cf4 \strokec4 : \cf6 \strokec6 judgeEmail\cf4 \strokec4 ,\cb1 \
\cb3             \cf6 \strokec6 eventKey\cf4 \strokec4 : \cf6 \strokec6 eventKey\cf4 \cb1 \strokec4 \
\cb3           \});\cb1 \
\cb3           \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 mailResult\cf4 \strokec4 .\cf6 \strokec6 success\cf4 \strokec4 ) \{\cb1 \
\cb3             \cf6 \strokec6 resp\cf4 \strokec4 .\cf6 \strokec6 emailSent\cf4 \strokec4  = \cf5 \strokec5 true\cf4 \strokec4 ;\cb1 \
\cb3           \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3             \cf6 \strokec6 resp\cf4 \strokec4 .\cf6 \strokec6 emailSent\cf4 \strokec4  = \cf5 \strokec5 false\cf4 \strokec4 ;\cb1 \
\cb3             \cf6 \strokec6 resp\cf4 \strokec4 .\cf6 \strokec6 emailError\cf4 \strokec4  = \cf6 \strokec6 mailResult\cf4 \strokec4 .\cf6 \strokec6 error\cf4 \strokec4 ;\cb1 \
\cb3           \}\cb1 \
\cb3         \}\cb1 \
\
\cb3         \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\cf6 \strokec6 resp\cf4 \strokec4 )).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Judge not found"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error in generateTokenJSON: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf5 \strokec5 typeof\cf4 \strokec4  \cf6 \strokec6 notifyOnError\cf4 \strokec4  === \cf8 \strokec8 'function'\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf6 \strokec6 notifyOnError\cf4 \strokec4 (\cf8 \strokec8 'generateTokenJSON'\cf4 \strokec4 , \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Failed to generate token: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf10 \cb3 \strokec10 /**\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  * Send the judge link to the judge's email address (public API)\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  * Expects: judgeName, judgeEmail, eventKey, linkBase (required)\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 sendJudgeLinkEmail\cf4 \strokec4 (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 judgeName\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4  ? \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 judgeName\cf4 \strokec4  : \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 judgeName\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 judgeEmail\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4  ? \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 judgeEmail\cf4 \strokec4  : \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 judgeEmail\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 eventKey\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4  ? \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 eventKey\cf4 \strokec4  : \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 eventKey\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 linkBase\cf4 \strokec4  = \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4  && \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 linkBase\cf4 \strokec4  ? \cf6 \strokec6 e\cf4 \strokec4 .\cf6 \strokec6 parameter\cf4 \strokec4 .\cf6 \strokec6 linkBase\cf4 \strokec4  : \cf8 \strokec8 ""\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 linkBase\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "linkBase parameter is missing"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 result\cf4 \strokec4  = \cf6 \strokec6 sendJudgeLinkEmail_\cf4 \strokec4 (\{\cb1 \
\cb3     \cf6 \strokec6 judgeName\cf4 \strokec4 : \cf6 \strokec6 judgeName\cf4 \strokec4 ,\cb1 \
\cb3     \cf6 \strokec6 judgeEmail\cf4 \strokec4 : \cf6 \strokec6 judgeEmail\cf4 \strokec4 ,\cb1 \
\cb3     \cf6 \strokec6 eventKey\cf4 \strokec4 : \cf6 \strokec6 eventKey\cf4 \strokec4 ,\cb1 \
\cb3     \cf6 \strokec6 linkBase\cf4 \strokec4 : \cf6 \strokec6 linkBase\cf4 \cb1 \strokec4 \
\cb3   \});\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf7 \strokec7 ContentService\cf4 \strokec4 .\cf6 \strokec6 createTextOutput\cf4 \strokec4 (\cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 stringify\cf4 \strokec4 (\cf6 \strokec6 result\cf4 \strokec4 )).\cf6 \strokec6 setMimeType\cf4 \strokec4 (\cf7 \strokec7 ContentService\cf4 \strokec4 .\cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 JSON\cf4 \strokec4 );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf10 \cb3 \strokec10 /**\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  * Helper: Actually sends the judge link email and returns \{success, message, [error]\}\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  * Accepts judgeName, judgeEmail, eventKey\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 sendJudgeLinkEmail_\cf4 \strokec4 (\cf6 \strokec6 opts\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 judgeName\cf4 \strokec4  = \cf6 \strokec6 opts\cf4 \strokec4 .\cf6 \strokec6 judgeName\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 judgeEmail\cf4 \strokec4  = \cf6 \strokec6 opts\cf4 \strokec4 .\cf6 \strokec6 judgeEmail\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 eventKey\cf4 \strokec4  = \cf6 \strokec6 opts\cf4 \strokec4 .\cf6 \strokec6 eventKey\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 judgeName\cf4 \strokec4  || !\cf6 \strokec6 judgeEmail\cf4 \strokec4  || !\cf6 \strokec6 eventKey\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \{ \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Missing judgeName, judgeEmail, or eventKey"\cf4 \strokec4  \};\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 eventName\cf4 \strokec4  = \cf6 \strokec6 getEventNameByKey\cf4 \strokec4 (\cf6 \strokec6 eventKey\cf4 \strokec4 );\cb1 \
\
\cb3   \cf5 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getBannerHtml\cf4 \strokec4 (\cf6 \strokec6 eventKey\cf4 \strokec4 , \cf6 \strokec6 context\cf4 \strokec4 , \cf6 \strokec6 eventName\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3       \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 apiUrl\cf4 \strokec4  = \cf7 \strokec7 MASTER_API_URL\cf4 \strokec4 ;\cb1 \
\cb3       \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 resp\cf4 \strokec4  = \cf7 \strokec7 UrlFetchApp\cf4 \strokec4 .\cf6 \strokec6 fetch\cf4 \strokec4 (\cb1 \
\cb3         \cf6 \strokec6 apiUrl\cf4 \strokec4  + \cf8 \strokec8 "?action=getBanner&event="\cf4 \strokec4  + \cf6 \strokec6 encodeURIComponent\cf4 \strokec4 (\cf6 \strokec6 eventKey\cf4 \strokec4 ) + \cf8 \strokec8 "&context="\cf4 \strokec4  + \cf6 \strokec6 encodeURIComponent\cf4 \strokec4 (\cf6 \strokec6 context\cf4 \strokec4 )\cb1 \
\cb3       );\cb1 \
\cb3       \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf7 \strokec7 JSON\cf4 \strokec4 .\cf6 \strokec6 parse\cf4 \strokec4 (\cf6 \strokec6 resp\cf4 \strokec4 .\cf6 \strokec6 getContentText\cf4 \strokec4 ());\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 success\cf4 \strokec4  && \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 url\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf5 \strokec5 let\cf4 \strokec4  \cf6 \strokec6 imgTag\cf4 \strokec4  = \cf8 \strokec8 '<img src="'\cf4 \strokec4  + \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 url\cf4 \strokec4  + \cf8 \strokec8 '" alt="'\cf4 \strokec4  + (\cf6 \strokec6 eventName\cf4 \strokec4  || \cf6 \strokec6 eventKey\cf4 \strokec4 ) + \cf8 \strokec8 '" style="max-width:100%;height:auto;">'\cf4 \strokec4 ;\cb1 \
\cb3         \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 link\cf4 \strokec4 ) \{\cb1 \
\cb3           \cf6 \strokec6 imgTag\cf4 \strokec4  = \cf8 \strokec8 '<a href="'\cf4 \strokec4  + \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 link\cf4 \strokec4  + \cf8 \strokec8 '" target="_blank">'\cf4 \strokec4  + \cf6 \strokec6 imgTag\cf4 \strokec4  + \cf8 \strokec8 '</a>'\cf4 \strokec4 ;\cb1 \
\cb3         \}\cb1 \
\cb3         \cf5 \strokec5 return\cf4 \strokec4  \cf8 \strokec8 `<div style="text-align:center;padding:10px 0;background:#f8f8f8;">\cf4 \strokec4 $\{\cf6 \strokec6 imgTag\cf4 \strokec4 \}\cf8 \strokec8 </div>`\cf4 \strokec4 ;\cb1 \
\cb3       \}\cb1 \
\cb3     \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 e\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error fetching banner for "\cf4 \strokec4  + \cf6 \strokec6 context\cf4 \strokec4  + \cf8 \strokec8 ": "\cf4 \strokec4  + \cf6 \strokec6 e\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf8 \strokec8 ""\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 getJudgesSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 token\cf4 \strokec4  = \cf5 \strokec5 null\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  ((\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 0\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ).\cf6 \strokec6 toString\cf4 \strokec4 ().\cf6 \strokec6 trim\cf4 \strokec4 ().\cf6 \strokec6 toLowerCase\cf4 \strokec4 () === \cf6 \strokec6 judgeName\cf4 \strokec4 .\cf6 \strokec6 toLowerCase\cf4 \strokec4 ()) \{\cb1 \
\cb3         \cf6 \strokec6 token\cf4 \strokec4  = \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 1\cf4 \strokec4 ];\cb1 \
\cb3         \cf5 \strokec5 break\cf4 \strokec4 ;\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 token\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf5 \strokec5 return\cf4 \strokec4  \{ \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Token not found for judge"\cf4 \strokec4  \};\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 link\cf4 \strokec4  = \cf8 \strokec8 `https://tattscore.com/network/\cf4 \strokec4 $\{\cf6 \strokec6 eventKey\cf4 \strokec4 \}\cf8 \strokec8 /judge/?token=\cf4 \strokec4 $\{\cf6 \strokec6 encodeURIComponent\cf4 \strokec4 (\cf6 \strokec6 token\cf4 \strokec4 )\}\cf8 \strokec8 `\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 subject\cf4 \strokec4  = \cf8 \strokec8 "Your Judging Link for "\cf4 \strokec4  + \cf6 \strokec6 eventName\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 body\cf4 \strokec4  = \cf8 \strokec8 "Hello "\cf4 \strokec4  + \cf6 \strokec6 judgeName\cf4 \strokec4  + \cf8 \strokec8 ",\\n\\n"\cf4 \strokec4  +\cb1 \
\cb3       \cf8 \strokec8 "Thank you for agreeing to judge at "\cf4 \strokec4  + \cf6 \strokec6 eventName\cf4 \strokec4  + \cf8 \strokec8 ".\\n\\n"\cf4 \strokec4  +\cb1 \
\cb3       \cf8 \strokec8 "Here is your secure judging link:\\n"\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 link\cf4 \strokec4  + \cf8 \strokec8 "\\n\\n"\cf4 \strokec4  +\cb1 \
\cb3       \cf8 \strokec8 "This link is unique to you. Please do not share it with others.\\n\\n"\cf4 \strokec4  +\cb1 \
\cb3       \cf8 \strokec8 "If you have any issues accessing your judging portal please contact the organizer.\\n\\n"\cf4 \strokec4  +\cb1 \
\cb3       \cf8 \strokec8 "Best regards,\\n"\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 eventName\cf4 \strokec4  + \cf8 \strokec8 " Team"\cf4 \strokec4 ;\cb1 \
\
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 topBanner\cf4 \strokec4  = \cf6 \strokec6 getBannerHtml\cf4 \strokec4 (\cf6 \strokec6 eventKey\cf4 \strokec4 , \cf8 \strokec8 "JUDGE_LINK_EMAIL_BANNER_TOP"\cf4 \strokec4 , \cf6 \strokec6 eventName\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 bottomBanner\cf4 \strokec4  = \cf6 \strokec6 getBannerHtml\cf4 \strokec4 (\cf6 \strokec6 eventKey\cf4 \strokec4 , \cf8 \strokec8 "JUDGE_LINK_EMAIL_BANNER_BOTTOM"\cf4 \strokec4 , \cf6 \strokec6 eventName\cf4 \strokec4 );\cb1 \
\
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 htmlBody\cf4 \strokec4  = (\cf6 \strokec6 topBanner\cf4 \strokec4  || \cf8 \strokec8 ''\cf4 \strokec4 ) +\cb1 \
\cb3       \cf8 \strokec8 '<div style="font-family:inherit;font-size:1.05em;color:#222;padding:20px;">'\cf4 \strokec4  +\cb1 \
\cb3         \cf6 \strokec6 body\cf4 \strokec4 .\cf6 \strokec6 replace\cf4 \strokec4 (\cf11 \strokec11 /\\n/\cf5 \strokec5 g\cf4 \strokec4 , \cf8 \strokec8 '<br>'\cf4 \strokec4 ) +\cb1 \
\cb3       \cf8 \strokec8 '</div>'\cf4 \strokec4  +\cb1 \
\cb3       (\cf6 \strokec6 bottomBanner\cf4 \strokec4  || \cf8 \strokec8 ''\cf4 \strokec4 );\cb1 \
\
\cb3     \cf7 \strokec7 MailApp\cf4 \strokec4 .\cf6 \strokec6 sendEmail\cf4 \strokec4 (\{\cb1 \
\cb3       \cf6 \strokec6 to\cf4 \strokec4 : \cf6 \strokec6 judgeEmail\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 subject\cf4 \strokec4 : \cf6 \strokec6 subject\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 body\cf4 \strokec4 : \cf6 \strokec6 body\cf4 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 htmlBody\cf4 \strokec4 : \cf6 \strokec6 htmlBody\cf4 \cb1 \strokec4 \
\cb3     \});\cb1 \
\
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \{ \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 true\cf4 \strokec4 , \cf6 \strokec6 message\cf4 \strokec4 : \cf8 \strokec8 "Email sent to "\cf4 \strokec4  + \cf6 \strokec6 judgeEmail\cf4 \strokec4  \};\cb1 \
\
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error in sendJudgeLinkEmail_: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf5 \strokec5 typeof\cf4 \strokec4  \cf6 \strokec6 notifyOnError\cf4 \strokec4  === \cf8 \strokec8 'function'\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf6 \strokec6 notifyOnError\cf4 \strokec4 (\cf8 \strokec8 'sendJudgeLinkEmail_'\cf4 \strokec4 , \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \{ \cf6 \strokec6 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf6 \strokec6 error\cf4 \strokec4 : \cf8 \strokec8 "Failed to send judge email: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4  \};\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf10 \cb3 \strokec10 /**\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  * Get the event name from the eventKey (looks up Event Data sheet)\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 getEventNameByKey\cf4 \strokec4 (\cf6 \strokec6 eventKey\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 ss\cf4 \strokec4  = \cf7 \strokec7 SpreadsheetApp\cf4 \strokec4 .\cf6 \strokec6 openById\cf4 \strokec4 (\cf7 \strokec7 MASTER_ADMIN_SHEET_ID\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 sheet\cf4 \strokec4  = \cf6 \strokec6 ss\cf4 \strokec4 .\cf6 \strokec6 getSheetByName\cf4 \strokec4 (\cf8 \strokec8 'Event Data'\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 sheet\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error: 'Event Data' sheet not found in Master Admin Sheet. Falling back to eventKey as name."\cf4 \strokec4 );\cb1 \
\cb3       \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 eventKey\cf4 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4  = \cf6 \strokec6 sheet\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 data\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  ((\cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 0\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ).\cf6 \strokec6 toString\cf4 \strokec4 ().\cf6 \strokec6 trim\cf4 \strokec4 () === \cf6 \strokec6 eventKey\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 data\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ][\cf9 \strokec9 1\cf4 \strokec4 ] || \cf6 \strokec6 eventKey\cf4 \strokec4 ;\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 eventKey\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf6 \strokec6 log\cf4 \strokec4 (\cf8 \strokec8 "Error in getEventNameByKey: "\cf4 \strokec4  + \cf6 \strokec6 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 eventKey\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
}