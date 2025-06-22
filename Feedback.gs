{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf200
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red77\green80\blue85;\red246\green247\blue249;\red46\green49\blue51;
\red20\green67\blue174;\red186\green6\blue115;\red24\green25\blue27;\red162\green0\blue16;\red18\green115\blue126;
\red97\green3\blue173;}
{\*\expandedcolortbl;;\cssrgb\c37255\c38824\c40784;\cssrgb\c97255\c97647\c98039;\cssrgb\c23529\c25098\c26275;
\cssrgb\c9412\c35294\c73725;\cssrgb\c78824\c15294\c52549;\cssrgb\c12549\c12941\c14118;\cssrgb\c70196\c7843\c7059;\cssrgb\c3529\c52157\c56863;
\cssrgb\c46275\c15294\c73333;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl400\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // === SCORING AREA DEFINITIONS ===\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 // Make sure this matches your frontend config exactly!\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 SCORING_AREAS\cf4 \strokec4  = [\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \{\cb1 \
\cb3     \cf7 \strokec7 key\cf4 \strokec4 : \cf8 \strokec8 'placement'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 label\cf4 \strokec4 : \cf8 \strokec8 'Placement / Flow'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 range\cf4 \strokec4 : [-\cf9 \strokec9 20\cf4 \strokec4 , \cf9 \strokec9 15\cf4 \strokec4 ],\cb1 \
\cb3     \cf7 \strokec7 description\cf4 \strokec4 : \cf8 \strokec8 'Scoring Guide: -20 = Extremely poor, 0 = Slightly off, 15 = Excellent.'\cf4 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     \cf7 \strokec7 key\cf4 \strokec4 : \cf8 \strokec8 'technique'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 label\cf4 \strokec4 : \cf8 \strokec8 'Technical Application'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 range\cf4 \strokec4 : [-\cf9 \strokec9 20\cf4 \strokec4 , \cf9 \strokec9 15\cf4 \strokec4 ],\cb1 \
\cb3     \cf7 \strokec7 description\cf4 \strokec4 : \cf8 \strokec8 'Scoring Guide: -20 = Major issues, 0 = Noticeable flaws, 5 = Inconsistent, 10 = Mostly clean; minor flaws, 15 = Lawless.'\cf4 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     \cf7 \strokec7 key\cf4 \strokec4 : \cf8 \strokec8 'qualityScore'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 label\cf4 \strokec4 : \cf8 \strokec8 'Realism / Design Quality'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 range\cf4 \strokec4 : [\cf9 \strokec9 0\cf4 \strokec4 , \cf9 \strokec9 30\cf4 \strokec4 ],\cb1 \
\cb3     \cf7 \strokec7 description\cf4 \strokec4 : \cf8 \strokec8 'Realism: 0 = Unrecognisable, 5 = Some clarity, but flat, inconsistent, unrealistic, 15 = Clear subject good depth, minor flaws, 30 = Flawless realism with lifelike shading and depth. Design: creativity & originality - 0 = Poor design, no structure or clarity, 5 = Uninspired, lacks originality, 15 = Solid concept, needs refinement, 30 = Exceptional, artistic and imaginative.'\cf4 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     \cf7 \strokec7 key\cf4 \strokec4 : \cf8 \strokec8 'blackworkOrColour'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 label\cf4 \strokec4 : \cf8 \strokec8 'Blackwork / Colour & Contrast'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 range\cf4 \strokec4 : [\cf9 \strokec9 0\cf4 \strokec4 , \cf9 \strokec9 30\cf4 \strokec4 ],\cb1 \
\cb3     \cf7 \strokec7 description\cf4 \strokec4 : \cf8 \strokec8 'Colour: colour use & / or contrast - 0 = No understanding, muddy / flat, 5 = Weak contrast or very poor use of tone and colour, 15 = Moderate contrast or palette use, 30 = Perfect colour use and / or contrast; Blackwork: linework & consistency; - 0 = Uneven, distorted, lacks intent or structure, 5 = Inconsistent linework or patchy fill, 15 = Clean overall, with minor breaks or alignment issues, 30 = Precise, balanced, and extremely well saturated. Flawless.'\cf4 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     \cf7 \strokec7 key\cf4 \strokec4 : \cf8 \strokec8 'readability'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 label\cf4 \strokec4 : \cf8 \strokec8 'Readability'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 range\cf4 \strokec4 : [-\cf9 \strokec9 10\cf4 \strokec4 , \cf9 \strokec9 30\cf4 \strokec4 ],\cb1 \
\cb3     \cf7 \strokec7 description\cf4 \strokec4 : \cf8 \strokec8 '-10 = unreadable, 5 = difficult to read, 15 = mostly readable, 30 = perfect clarity.'\cf4 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     \cf7 \strokec7 key\cf4 \strokec4 : \cf8 \strokec8 'creativity'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 label\cf4 \strokec4 : \cf8 \strokec8 'Creativity'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 range\cf4 \strokec4 : [\cf9 \strokec9 0\cf4 \strokec4 , \cf9 \strokec9 30\cf4 \strokec4 ],\cb1 \
\cb3     \cf7 \strokec7 description\cf4 \strokec4 : \cf8 \strokec8 '0 = generic, 5 = minimal variation, 15 = some creativity, 30 = exceptional & unique.'\cf4 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     \cf7 \strokec7 key\cf4 \strokec4 : \cf8 \strokec8 'difficulty'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 label\cf4 \strokec4 : \cf8 \strokec8 'Technical Difficulty'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 range\cf4 \strokec4 : [\cf9 \strokec9 0\cf4 \strokec4 , \cf9 \strokec9 30\cf4 \strokec4 ],\cb1 \
\cb3     \cf7 \strokec7 description\cf4 \strokec4 : \cf8 \strokec8 '0 = basic, 5 = mild challenge, 15 = above average, 30 = very difficult.'\cf4 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     \cf7 \strokec7 key\cf4 \strokec4 : \cf8 \strokec8 'styleAccuracy'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 label\cf4 \strokec4 : \cf8 \strokec8 'Style / Category Accuracy'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 range\cf4 \strokec4 : [-\cf9 \strokec9 50\cf4 \strokec4 , \cf9 \strokec9 0\cf4 \strokec4 ],\cb1 \
\cb3     \cf7 \strokec7 description\cf4 \strokec4 : \cf8 \strokec8 '0 = perfect representation, -50 = does not represent style or category.'\cf4 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     \cf7 \strokec7 key\cf4 \strokec4 : \cf8 \strokec8 'judgesScore'\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 label\cf4 \strokec4 : \cf8 \strokec8 "Judge's Overall Opinion"\cf4 \strokec4 ,\cb1 \
\cb3     \cf7 \strokec7 range\cf4 \strokec4 : [\cf9 \strokec9 0\cf4 \strokec4 , \cf9 \strokec9 100\cf4 \strokec4 ],\cb1 \
\cb3     \cf7 \strokec7 description\cf4 \strokec4 : \cf8 \strokec8 '0 = awful, 60+ = potential winner, 100 = WOW!'\cf4 \cb1 \strokec4 \
\cb3   \}\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 \strokec2 // === HELPER: Generates the feedback email HTML body from raw scores ===\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 generateFeedbackEmailBodyFromRawScores\cf4 \strokec4 (\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf7 \strokec7 feedback\cf4 \strokec4 , \cf7 \strokec7 entryNumber\cf4 \strokec4 , \cf7 \strokec7 artistName\cf4 \strokec4 , \cf7 \strokec7 eventName\cf4 \strokec4 , \cf7 \strokec7 topBanner\cf4 \strokec4 , \cf7 \strokec7 bottomBanner\cf4 \strokec4 , \cf7 \strokec7 category\cf4 \cb1 \strokec4 \
\cb3 ) \{\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 judgeLetters\cf4 \strokec4  = \cf8 \strokec8 "ABCDEFGHIJKLMNOPQRSTUVWXYZ"\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 totalScore\cf4 \strokec4  = \cf9 \strokec9 0\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 judgeBlocks\cf4 \strokec4  = \cf7 \strokec7 feedback\cf4 \strokec4 .\cf7 \strokec7 map\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4 (\cf7 \strokec7 item\cf4 \strokec4 , \cf7 \strokec7 idx\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 judgeTotal\cf4 \strokec4  = \cf9 \strokec9 0\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 areaLines\cf4 \strokec4  = \cf6 \strokec6 SCORING_AREAS\cf4 \strokec4 .\cf7 \strokec7 map\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4 (\cf7 \strokec7 area\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 val\cf4 \strokec4  = \cf7 \strokec7 parseFloat\cf4 \strokec4 (\cf7 \strokec7 item\cf4 \strokec4 [\cf7 \strokec7 area\cf4 \strokec4 .\cf7 \strokec7 key\cf4 \strokec4 ]) || \cf9 \strokec9 0\cf4 \strokec4 ;\cb1 \
\cb3       \cf7 \strokec7 judgeTotal\cf4 \strokec4  += \cf7 \strokec7 val\cf4 \strokec4 ;\cb1 \
\cb3       \cf5 \strokec5 return\cf4 \strokec4  (\cb1 \
\cb3         \cf8 \strokec8 '<div style="margin-bottom:5px;">'\cf4 \strokec4  +\cb1 \
\cb3           \cf8 \strokec8 '<strong>'\cf4 \strokec4  + \cf7 \strokec7 area\cf4 \strokec4 .\cf7 \strokec7 label\cf4 \strokec4  + \cf8 \strokec8 ' ('\cf4 \strokec4  + \cf7 \strokec7 area\cf4 \strokec4 .\cf7 \strokec7 range\cf4 \strokec4 [\cf9 \strokec9 0\cf4 \strokec4 ] + \cf8 \strokec8 ' to '\cf4 \strokec4  + \cf7 \strokec7 area\cf4 \strokec4 .\cf7 \strokec7 range\cf4 \strokec4 [\cf9 \strokec9 1\cf4 \strokec4 ] + \cf8 \strokec8 '):</strong> '\cf4 \strokec4  +\cb1 \
\cb3           \cf8 \strokec8 '<span>'\cf4 \strokec4  + \cf7 \strokec7 val\cf4 \strokec4  + \cf8 \strokec8 '</span>'\cf4 \strokec4  +\cb1 \
\cb3           \cf8 \strokec8 '<div style="font-size:0.95em;color:#888;">'\cf4 \strokec4  + \cf7 \strokec7 area\cf4 \strokec4 .\cf7 \strokec7 description\cf4 \strokec4  + \cf8 \strokec8 '</div>'\cf4 \strokec4  +\cb1 \
\cb3         \cf8 \strokec8 '</div>'\cf4 \cb1 \strokec4 \
\cb3       );\cb1 \
\cb3     \}).\cf7 \strokec7 join\cf4 \strokec4 (\cf8 \strokec8 ''\cf4 \strokec4 );\cb1 \
\cb3     \cf7 \strokec7 totalScore\cf4 \strokec4  += \cf7 \strokec7 judgeTotal\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  (\cb1 \
\cb3       \cf8 \strokec8 '<div style="background: #fff; padding: 15px; margin-bottom: 15px; border-radius: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.06);">'\cf4 \strokec4  +\cb1 \
\cb3         \cf8 \strokec8 '<div style="font-weight: bold; color: #2c3e50;">Judge '\cf4 \strokec4  + \cf7 \strokec7 judgeLetters\cf4 \strokec4 [\cf7 \strokec7 idx\cf4 \strokec4 ] +\cb1 \
\cb3         \cf8 \strokec8 ' <span style="color:#27ae60;">\'97 Judge\\'s Overall Opinion: '\cf4 \strokec4  +\cb1 \
\cb3         (\cf7 \strokec7 item\cf4 \strokec4 .\cf7 \strokec7 judgesScore\cf4 \strokec4  && !\cf7 \strokec7 isNaN\cf4 \strokec4 (\cf7 \strokec7 item\cf4 \strokec4 .\cf7 \strokec7 judgesScore\cf4 \strokec4 ) ? \cf7 \strokec7 item\cf4 \strokec4 .\cf7 \strokec7 judgesScore\cf4 \strokec4  : \cf7 \strokec7 judgeTotal\cf4 \strokec4 ) +\cb1 \
\cb3         \cf8 \strokec8 '/100</span></div>'\cf4 \strokec4  +\cb1 \
\cb3         \cf7 \strokec7 areaLines\cf4 \strokec4  +\cb1 \
\cb3         (\cf7 \strokec7 item\cf4 \strokec4 .\cf7 \strokec7 comments\cf4 \cb1 \strokec4 \
\cb3           ? \cf8 \strokec8 '<div style="margin-top: 10px;"><div style="font-weight: bold; margin-bottom: 5px;">Comments:</div>'\cf4 \strokec4  +\cb1 \
\cb3             \cf8 \strokec8 '<div style="background: #f9f9f9; padding: 10px; border-radius: 5px;">'\cf4 \strokec4  +\cb1 \
\cb3             \cf7 \strokec7 item\cf4 \strokec4 .\cf7 \strokec7 comments\cf4 \strokec4  + \cf8 \strokec8 '</div></div>'\cf4 \cb1 \strokec4 \
\cb3           : \cf8 \strokec8 ''\cf4 \strokec4 ) +\cb1 \
\cb3       \cf8 \strokec8 '</div>'\cf4 \cb1 \strokec4 \
\cb3     );\cb1 \
\cb3   \}).\cf7 \strokec7 join\cf4 \strokec4 (\cf8 \strokec8 ''\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 maxTotal\cf4 \strokec4  = \cf7 \strokec7 feedback\cf4 \strokec4 .\cf7 \strokec7 length\cf4 \strokec4  * \cf9 \strokec9 280\cf4 \strokec4 ; \cf2 \strokec2 // adjust if your max score is different\cf4 \cb1 \strokec4 \
\
\cb3   \cf5 \strokec5 return\cf4 \strokec4  (\cb1 \
\cb3     \cf8 \strokec8 '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">'\cf4 \strokec4  +\cb1 \
\cb3       (\cf7 \strokec7 topBanner\cf4 \strokec4  || \cf8 \strokec8 ''\cf4 \strokec4 ) +\cb1 \
\cb3       \cf8 \strokec8 '<div style="background: #23232b; color: white; padding: 20px; text-align: center; border-radius: 0;">'\cf4 \strokec4  +\cb1 \
\cb3         \cf8 \strokec8 '<h1 style="margin: 0;">Your Feedback Report</h1>'\cf4 \strokec4  +\cb1 \
\cb3         \cf8 \strokec8 '<p style="margin: 10px 0 0;">Entry #'\cf4 \strokec4  + \cf7 \strokec7 entryNumber\cf4 \strokec4  + \cf8 \strokec8 '</p>'\cf4 \strokec4  +\cb1 \
\cb3       \cf8 \strokec8 '</div>'\cf4 \strokec4  +\cb1 \
\cb3       \cf8 \strokec8 '<div style="background: #f5f5f5; padding: 20px;">'\cf4 \strokec4  +\cb1 \
\cb3         \cf8 \strokec8 '<h2 style="color: #23232b; margin-top: 0;">Artist: '\cf4 \strokec4  + \cf7 \strokec7 artistName\cf4 \strokec4  + \cf8 \strokec8 '</h2>'\cf4 \strokec4  +\cb1 \
\cb3         \cf8 \strokec8 '<p><strong>Category:</strong> '\cf4 \strokec4  + \cf7 \strokec7 category\cf4 \strokec4  + \cf8 \strokec8 '</p>'\cf4 \strokec4  +\cb1 \
\cb3         \cf8 \strokec8 '<p>Total score: <strong>'\cf4 \strokec4  + \cf7 \strokec7 totalScore\cf4 \strokec4  + \cf8 \strokec8 '</strong> out of <strong>'\cf4 \strokec4  + \cf7 \strokec7 maxTotal\cf4 \strokec4  + \cf8 \strokec8 '</strong></p>'\cf4 \strokec4  +\cb1 \
\cb3         \cf8 \strokec8 '<h3 style="color: #23232b; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Judge Feedback</h3>'\cf4 \strokec4  +\cb1 \
\cb3         \cf7 \strokec7 judgeBlocks\cf4 \strokec4  +\cb1 \
\cb3         \cf8 \strokec8 '<div style="margin-top: 30px; text-align: center; color: #777; font-size: 0.9em;">'\cf4 \strokec4  +\cb1 \
\cb3           \cf8 \strokec8 '<p>This feedback is provided to help you grow as an artist.</p>'\cf4 \strokec4  +\cb1 \
\cb3           \cf8 \strokec8 '<p>Thank you for participating in '\cf4 \strokec4  + (\cf7 \strokec7 eventName\cf4 \strokec4  || \cf8 \strokec8 'the event'\cf4 \strokec4 ) + \cf8 \strokec8 '!</p>'\cf4 \strokec4  +\cb1 \
\cb3         \cf8 \strokec8 '</div>'\cf4 \strokec4  +\cb1 \
\cb3       \cf8 \strokec8 '</div>'\cf4 \strokec4  +\cb1 \
\cb3       (\cf7 \strokec7 bottomBanner\cf4 \strokec4  || \cf8 \strokec8 ''\cf4 \strokec4 ) +\cb1 \
\cb3     \cf8 \strokec8 '</div>'\cf4 \cb1 \strokec4 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\sl400\partightenfactor0
\cf2 \cb3 \strokec2 // === MAIN FUNCTION: Send Feedback Report Email ===\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl400\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 sendFeedbackReport\cf4 \strokec4 (\cf7 \strokec7 e\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl400\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 entryNumber\cf4 \strokec4  = \cf7 \strokec7 e\cf4 \strokec4 .\cf7 \strokec7 parameter\cf4 \strokec4 .\cf7 \strokec7 entryNumber\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 email\cf4 \strokec4  = \cf7 \strokec7 e\cf4 \strokec4 .\cf7 \strokec7 parameter\cf4 \strokec4 .\cf7 \strokec7 email\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 artistName\cf4 \strokec4  = \cf7 \strokec7 e\cf4 \strokec4 .\cf7 \strokec7 parameter\cf4 \strokec4 .\cf7 \strokec7 artistName\cf4 \strokec4  || \cf8 \strokec8 'Artist'\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 eventKey\cf4 \strokec4  = \cf7 \strokec7 e\cf4 \strokec4 .\cf7 \strokec7 parameter\cf4 \strokec4 .\cf7 \strokec7 eventKey\cf4 \strokec4  || \cf8 \strokec8 ''\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 eventName\cf4 \strokec4  = \cf7 \strokec7 getEventNameByKey\cf4 \strokec4 (\cf7 \strokec7 eventKey\cf4 \strokec4 ) || \cf7 \strokec7 e\cf4 \strokec4 .\cf7 \strokec7 parameter\cf4 \strokec4 .\cf7 \strokec7 eventName\cf4 \strokec4  || \cf8 \strokec8 'the event'\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 category\cf4 \strokec4  = \cf7 \strokec7 e\cf4 \strokec4 .\cf7 \strokec7 parameter\cf4 \strokec4 .\cf7 \strokec7 category\cf4 \strokec4  || \cf8 \strokec8 ''\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (!\cf7 \strokec7 entryNumber\cf4 \strokec4  || !\cf7 \strokec7 email\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 ContentService\cf4 \strokec4 .\cf7 \strokec7 createTextOutput\cf4 \strokec4 (\cf6 \strokec6 JSON\cf4 \strokec4 .\cf7 \strokec7 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf7 \strokec7 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf7 \strokec7 error\cf4 \strokec4 : \cf8 \strokec8 "Entry number and email are required"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf7 \strokec7 setMimeType\cf4 \strokec4 (\cf6 \strokec6 ContentService\cf4 \strokec4 .\cf6 \strokec6 MimeType\cf4 \strokec4 .\cf6 \strokec6 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 sheet\cf4 \strokec4  = \cf7 \strokec7 getRawScoresSheet_\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 data\cf4 \strokec4  = \cf7 \strokec7 sheet\cf4 \strokec4 .\cf7 \strokec7 getDataRange\cf4 \strokec4 ().\cf7 \strokec7 getValues\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 feedback\cf4 \strokec4  = [];\cb1 \
\
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf7 \strokec7 i\cf4 \strokec4  < \cf7 \strokec7 data\cf4 \strokec4 .\cf7 \strokec7 length\cf4 \strokec4 ; \cf7 \strokec7 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (\cb1 \
\cb3         \cf7 \strokec7 data\cf4 \strokec4 [\cf7 \strokec7 i\cf4 \strokec4 ][\cf9 \strokec9 1\cf4 \strokec4 ] && \cb1 \
\cb3         \cf7 \strokec7 data\cf4 \strokec4 [\cf7 \strokec7 i\cf4 \strokec4 ][\cf9 \strokec9 1\cf4 \strokec4 ].\cf7 \strokec7 toString\cf4 \strokec4 ().\cf7 \strokec7 replace\cf4 \strokec4 (\cf10 \strokec10 /^0+/\cf4 \strokec4 , \cf8 \strokec8 ''\cf4 \strokec4 ) === \cf7 \strokec7 entryNumber\cf4 \strokec4 .\cf7 \strokec7 toString\cf4 \strokec4 ().\cf7 \strokec7 replace\cf4 \strokec4 (\cf10 \strokec10 /^0+/\cf4 \strokec4 , \cf8 \strokec8 ''\cf4 \strokec4 )\cb1 \
\cb3       ) \{\cb1 \
\cb3         \cf7 \strokec7 feedback\cf4 \strokec4 .\cf7 \strokec7 push\cf4 \strokec4 (\{\cb1 \
\cb3           \cf7 \strokec7 judgeName\cf4 \strokec4 : \cf7 \strokec7 data\cf4 \strokec4 [\cf7 \strokec7 i\cf4 \strokec4 ][\cf9 \strokec9 0\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ,\cb1 \
\cb3           \cf7 \strokec7 placement\cf4 \strokec4 : \cf7 \strokec7 data\cf4 \strokec4 [\cf7 \strokec7 i\cf4 \strokec4 ][\cf9 \strokec9 2\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ,\cb1 \
\cb3           \cf7 \strokec7 technique\cf4 \strokec4 : \cf7 \strokec7 data\cf4 \strokec4 [\cf7 \strokec7 i\cf4 \strokec4 ][\cf9 \strokec9 3\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ,\cb1 \
\cb3           \cf7 \strokec7 qualityScore\cf4 \strokec4 : \cf7 \strokec7 data\cf4 \strokec4 [\cf7 \strokec7 i\cf4 \strokec4 ][\cf9 \strokec9 4\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ,\cb1 \
\cb3           \cf7 \strokec7 blackworkOrColour\cf4 \strokec4 : \cf7 \strokec7 data\cf4 \strokec4 [\cf7 \strokec7 i\cf4 \strokec4 ][\cf9 \strokec9 5\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ,\cb1 \
\cb3           \cf7 \strokec7 readability\cf4 \strokec4 : \cf7 \strokec7 data\cf4 \strokec4 [\cf7 \strokec7 i\cf4 \strokec4 ][\cf9 \strokec9 6\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ,\cb1 \
\cb3           \cf7 \strokec7 creativity\cf4 \strokec4 : \cf7 \strokec7 data\cf4 \strokec4 [\cf7 \strokec7 i\cf4 \strokec4 ][\cf9 \strokec9 7\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ,\cb1 \
\cb3           \cf7 \strokec7 difficulty\cf4 \strokec4 : \cf7 \strokec7 data\cf4 \strokec4 [\cf7 \strokec7 i\cf4 \strokec4 ][\cf9 \strokec9 8\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ,\cb1 \
\cb3           \cf7 \strokec7 styleAccuracy\cf4 \strokec4 : \cf7 \strokec7 data\cf4 \strokec4 [\cf7 \strokec7 i\cf4 \strokec4 ][\cf9 \strokec9 9\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ,\cb1 \
\cb3           \cf7 \strokec7 judgesScore\cf4 \strokec4 : \cf7 \strokec7 data\cf4 \strokec4 [\cf7 \strokec7 i\cf4 \strokec4 ][\cf9 \strokec9 10\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ,\cb1 \
\cb3           \cf7 \strokec7 comments\cf4 \strokec4 : \cf7 \strokec7 data\cf4 \strokec4 [\cf7 \strokec7 i\cf4 \strokec4 ][\cf9 \strokec9 11\cf4 \strokec4 ] || \cf8 \strokec8 ''\cf4 \strokec4 ,\cb1 \
\cb3         \});\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf7 \strokec7 feedback\cf4 \strokec4 .\cf7 \strokec7 length\cf4 \strokec4  === \cf9 \strokec9 0\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 ContentService\cf4 \strokec4 .\cf7 \strokec7 createTextOutput\cf4 \strokec4 (\cf6 \strokec6 JSON\cf4 \strokec4 .\cf7 \strokec7 stringify\cf4 \strokec4 (\{\cb1 \
\cb3         \cf7 \strokec7 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf7 \strokec7 error\cf4 \strokec4 : \cf8 \strokec8 "No feedback found for this entry"\cf4 \cb1 \strokec4 \
\cb3       \})).\cf7 \strokec7 setMimeType\cf4 \strokec4 (\cf6 \strokec6 ContentService\cf4 \strokec4 .\cf6 \strokec6 MimeType\cf4 \strokec4 .\cf6 \strokec6 JSON\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 topBanner\cf4 \strokec4  = \cf7 \strokec7 getBannerHtml\cf4 \strokec4 (\cf7 \strokec7 eventKey\cf4 \strokec4 , \cf8 \strokec8 "ARTIST_FEEDBACK_EMAIL_BANNER_TOP"\cf4 \strokec4 , \cf7 \strokec7 eventName\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 bottomBanner\cf4 \strokec4  = \cf7 \strokec7 getBannerHtml\cf4 \strokec4 (\cf7 \strokec7 eventKey\cf4 \strokec4 , \cf8 \strokec8 "ARTIST_FEEDBACK_EMAIL_BANNER_BOTTOM"\cf4 \strokec4 , \cf7 \strokec7 eventName\cf4 \strokec4 );\cb1 \
\
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 emailSubject\cf4 \strokec4  = \cf8 \strokec8 "Feedback for your entry no "\cf4 \strokec4  + \cf7 \strokec7 entryNumber\cf4 \strokec4  + \cf8 \strokec8 " at "\cf4 \strokec4  + \cf7 \strokec7 eventName\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf7 \strokec7 emailBody\cf4 \strokec4  = \cf7 \strokec7 generateFeedbackEmailBodyFromRawScores\cf4 \strokec4 (\cb1 \
\cb3       \cf7 \strokec7 feedback\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 entryNumber\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 artistName\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 eventName\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 topBanner\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 bottomBanner\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 category\cf4 \cb1 \strokec4 \
\cb3     );\cb1 \
\
\cb3     \cf6 \strokec6 MailApp\cf4 \strokec4 .\cf7 \strokec7 sendEmail\cf4 \strokec4 (\{\cb1 \
\cb3       \cf7 \strokec7 to\cf4 \strokec4 : \cf7 \strokec7 email\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 subject\cf4 \strokec4 : \cf7 \strokec7 emailSubject\cf4 \strokec4 ,\cb1 \
\cb3       \cf7 \strokec7 htmlBody\cf4 \strokec4 : \cf7 \strokec7 emailBody\cf4 \cb1 \strokec4 \
\cb3     \});\cb1 \
\
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 ContentService\cf4 \strokec4 .\cf7 \strokec7 createTextOutput\cf4 \strokec4 (\cf6 \strokec6 JSON\cf4 \strokec4 .\cf7 \strokec7 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf7 \strokec7 success\cf4 \strokec4 : \cf5 \strokec5 true\cf4 \strokec4 , \cf7 \strokec7 message\cf4 \strokec4 : \cf8 \strokec8 "Feedback email sent successfully"\cf4 \cb1 \strokec4 \
\cb3     \})).\cf7 \strokec7 setMimeType\cf4 \strokec4 (\cf6 \strokec6 ContentService\cf4 \strokec4 .\cf6 \strokec6 MimeType\cf4 \strokec4 .\cf6 \strokec6 JSON\cf4 \strokec4 );\cb1 \
\
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf7 \strokec7 err\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf6 \strokec6 Logger\cf4 \strokec4 .\cf7 \strokec7 log\cf4 \strokec4 (\cf8 \strokec8 "Error in sendFeedbackReport: "\cf4 \strokec4  + \cf7 \strokec7 err\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf5 \strokec5 typeof\cf4 \strokec4  \cf7 \strokec7 notifyOnError\cf4 \strokec4  === \cf8 \strokec8 'function'\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf7 \strokec7 notifyOnError\cf4 \strokec4 (\cf8 \strokec8 'sendFeedbackReport'\cf4 \strokec4 , \cf7 \strokec7 err\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 ContentService\cf4 \strokec4 .\cf7 \strokec7 createTextOutput\cf4 \strokec4 (\cf6 \strokec6 JSON\cf4 \strokec4 .\cf7 \strokec7 stringify\cf4 \strokec4 (\{\cb1 \
\cb3       \cf7 \strokec7 success\cf4 \strokec4 : \cf5 \strokec5 false\cf4 \strokec4 , \cf7 \strokec7 error\cf4 \strokec4 : \cf8 \strokec8 "Failed to send feedback email: "\cf4 \strokec4  + \cf7 \strokec7 err\cf4 \cb1 \strokec4 \
\cb3     \})).\cf7 \strokec7 setMimeType\cf4 \strokec4 (\cf6 \strokec6 ContentService\cf4 \strokec4 .\cf6 \strokec6 MimeType\cf4 \strokec4 .\cf6 \strokec6 JSON\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
}