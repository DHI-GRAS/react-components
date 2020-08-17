!function(e){var t={};function a(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=9)}([function(e,t){e.exports=react},function(e,t){e.exports=MaterialUI.core},function(e,t){e.exports=prop-types},function(e,t){e.exports=formik},function(e,t){e.exports=MaterialUI.styles},function(e,t){e.exports=formik-material-ui},function(e,t){e.exports=MaterialUI.ExpandMore},function(e,t){e.exports=react-spinners},function(e,t){e.exports=yup},function(e,t,a){"use strict";a.r(t),a.d(t,"Information",(function(){return x})),a.d(t,"DynamicForm",(function(){return R})),a.d(t,"SidebarTitle",(function(){return j}));var o=a(0),r=a.n(o),n=a(2),i=a.n(n),s=a(1),l=function(){return r.a.createElement(s.Box,null,r.a.createElement(s.Typography,{variant:"subtitle1"},"About this tool"),r.a.createElement(s.Typography,{variant:"body2"},"This tool is intended to facilitate easy use of the API access to altimetry data prepared for use in MetOcean studies and for validation of and assimilation in hydrodynamical models."),r.a.createElement(s.Typography,{variant:"subtitle1"},"How to use it"),r.a.createElement(s.Typography,{variant:"body2"},"Select the area of interest for which you want to get altimetry data. Moreover, selecting time interval, satellites and/or data filters may help you filter the data. To be noted that you need to get approval / authorization from us in order to download data."),r.a.createElement(s.Typography,{variant:"subtitle1"},"How data filtering is done"),r.a.createElement(s.Typography,{variant:"body2"},"The data filtering and editing routines are supported by expert knowledge provided by colleagues from The National Space Institute at the Technical University of Denmark, also known as DTU Space."),r.a.createElement(s.Typography,{variant:"subtitle1"},"About DHI"),r.a.createElement(s.Typography,{variant:"body2"},"DHI are the first people you should call when you have a tough challenge to solve in a water environment – be it a river, a reservoir, an ocean, a coastline, or an aquifer. Our knowledge of water environments is second-to-none. It represents 50 years of dedicated research and real-life experience from more than 140 countries. We strive to make this knowledge globally accessible to clients and partners by channelling it through our local teams and unique software. Our world is water. So whether you need to save water, share it fairly, improve its quality, quantify its impact or manage its flow, we can help. Our knowledge, combined with our team's expertise and the power of our technology, holds the key to unlocking the right solution. Read more on",r.a.createElement(s.Link,{href:"https://www.dhigroup.com/"}," dhigroup.com")))},c={margin:0},u=function(){return r.a.createElement(s.Box,null,r.a.createElement(s.Typography,{variant:"body2"},"With our global network of offices, we make sure you get the right answers to your local needs."),r.a.createElement(s.Box,{py:0},r.a.createElement(s.Typography,{variant:"body2",style:c},"DHI A/S"),r.a.createElement(s.Typography,{variant:"body2",style:c},"Agern Alle 5, 2970 Hørsholm, Denmark"),r.a.createElement(s.Typography,{variant:"body2",style:c},r.a.createElement(s.Link,{href:"mailto:gras@dhigroup.com"},"gras@dhigroup.com")),r.a.createElement(s.Typography,{variant:"body2",style:c},"+45 4516 9100"),r.a.createElement(s.Typography,{variant:"body2",style:c},"CVR no: 36466871")))},d=function(){return r.a.createElement(s.Box,null,r.a.createElement(s.Box,{pb:2},r.a.createElement(s.Typography,{variant:"subtitle1"},"We provide this website as a service and for informational purposes only.")),r.a.createElement(s.Typography,{variant:"body2"},"The transmission of this information does not create any form of relationship with us. You should not act upon information provided on this site without seeking our personal assistance. While we have attempted to maintain the information, the software and any other services on this site as accurately as possible, the site may contain errors or omissions for which we disclaim any and all liability. The material and contents posted on this site is provided without warranty of any kind."),r.a.createElement(s.Typography,{variant:"body2"},"We are not responsible for any loss of hardware, software or files, caused by the use of the web site or elements downloaded or used from/on the web site. Hence we make no warranty, that the web site or product or services provided on the web site, either by us or on our behalf (including free software downloads) will meet your requirements or will be uninterrupted, timely, secure or without errors, or that the website or the servers we use are free of viruses or bugs or are fully functional or accurate."))},p=function(){return r.a.createElement(s.Box,null,r.a.createElement(s.Typography,{variant:"subtitle1"},"Can I get such information from my area?"),r.a.createElement(s.Typography,{variant:"body2"},"Yes satellites and our services are global!"),r.a.createElement(s.Typography,{variant:"subtitle1"},"How often can I get this type of maps?"),r.a.createElement(s.Typography,{variant:"body2"},"Potentially daily (and in some cases a few times per day), but this depends on the overpass schedule of the different satelittes."),r.a.createElement(s.Typography,{variant:"subtitle1"},"Can I always get information about historical flood events?"),r.a.createElement(s.Typography,{variant:"body2"},"Yes sometimes, but this depends on the availibility of archived imagery"),r.a.createElement(s.Typography,{variant:"subtitle1"},"What costs are associated?"),r.a.createElement(s.Typography,{variant:"body2"},"Use this viewer to get an estimate of the associated costs and contact us for a more detailed quote."),r.a.createElement(s.Typography,{variant:"subtitle1"},"How quickly after the flooding can I get the information?"),r.a.createElement(s.Typography,{variant:"body2"},"The raw satellite image is typically available within hours after the image acqusition. The time needed for analysis and production maps depends can vary from a few hours to days depending on the area size."),r.a.createElement(s.Typography,{variant:"subtitle1"},"Can we get data from future flood events?"),r.a.createElement(s.Typography,{variant:"body2"},"Yes! Simply let us know in advance where and when you expect a flooding to occur, then we can initiate a tasking of new satellite images of the needed area/time"))},h={padding:0,margin:0},y=Object(s.withStyles)({link:{color:"blue"}},{withTheme:!0})((function(e){var t=e.classes;return r.a.createElement(s.Box,null,r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{variant:"body2"},'At DHI ("DHI", "we" or “us”) data protection and confidentiality is a high priority. This privacy policy sets out clear guidelines for how DHI processes your personal data. Further, we explain how we use the personal data that you leave and/or provide when you visit our websites or when you interact with us with various business relations.')),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"1. DATA CONTROLLER AND CONTACT INFORMATION"),r.a.createElement(s.Typography,{variant:"body2"},"This website is operated and owned by:"),r.a.createElement(s.Typography,{variant:"body2",style:h},"DHI A/S"),r.a.createElement(s.Typography,{variant:"body2",style:h},"Agern Alle 5"),r.a.createElement(s.Typography,{variant:"body2",style:h},"2970 Hørsholm"),r.a.createElement(s.Typography,{variant:"body2",style:h},"CVR no: 36466871 +45 4516 9200"),r.a.createElement(s.Typography,{variant:"body2"},"info@dhigroup.com")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"2. COLLECTION OF PERSONAL DATA"),r.a.createElement(s.Typography,{variant:"body2"},"You will always be informed in connection with collection of personal data about you. The personal data collected by us may include, for instance, your name, your email address, IP address and similar identification data, including information about your navigation on the website."),r.a.createElement(s.Typography,{variant:"body2"},"In connection with the submission of your data it will always be stated whether the submission is voluntary or necessary for completing the desired action."),r.a.createElement(s.Typography,{variant:"body2"},"Your personal data is collected in one or several of the below cases:"),r.a.createElement(s.Typography,{variant:"body2"},"* When you sign up for DHI newsletter. The legal basis for such processing is the GDPR art. 6(1)(a)."),r.a.createElement(s.Typography,{variant:"body2"},"* When you use DHI’s websites. The legal basis for such processing is the GDPR art. 6(1)(f). The legitimate interest under (f) is for us to improve our websites and to understand how our users use the websites."),r.a.createElement(s.Typography,{variant:"body2"},"* When you download our software or applications. The legal basis for such processing is the GDPR art. 6(1)(b)."),r.a.createElement(s.Typography,{variant:"body2"},"* When you sign up for an event. The legal basis for such processing is the GDPR art. 6(1)(b)."),r.a.createElement(s.Typography,{variant:"body2"},"* When you sign up for an online or physical training course. The legal basis for such processing is the GDPR art. 6(1)(b)."),r.a.createElement(s.Typography,{variant:"body2"},"* When you download our eBooks. The legal basis for such processing is the GDPR art. 6(1)(b)."),r.a.createElement(s.Typography,{variant:"body2"},"* When you create an account at DHI webshops. The legal basis for such processing is the GDPR art. 6(1)(b)."),r.a.createElement(s.Typography,{variant:"body2"},"* When you buy products or services at our webshops. The legal basis for such processing is the GDPR art. 6(1)(b)."),r.a.createElement(s.Typography,{variant:"body2"},"* When you contact us. The legal basis for such processing is the GDPR art. 6(1)(b) and/or (f). The legitimate interest under (f) is for us to be able to respond to your inquiry.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"3. USE OF PERSONAL DATA"),r.a.createElement(s.Typography,{variant:"body2"},"We will use personal information only in ways that are compatible with the purposes for which it was collected or subsequently authorised by you. DHI will take reasonable steps to ensure that personal information is relevant to its intended use, accurate, complete, and current."),r.a.createElement(s.Typography,{variant:"body2"},"Please note, that we will only use your personal data to send marketing material if you have given your explicit consent, unless legislation allows us to contact you without your prior consent."),r.a.createElement(s.Typography,{variant:"body2"},"DHI keeps statistics about which areas of the site our users visit. This information is used to improve the website. We do use data about how our users navigate, to better understand how our users use our websites and from that we try to improve the user experience. Furthermore, we collect information about what our users, as a unit, prefer. This information is also used to improve the website. We do not sell or otherwise disclose information about how our users navigate and use our website.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"4. SHARING OF PERSONAL DATA"),r.a.createElement(s.Typography,{variant:"body2"},"We do not transfer your personal data to any third parties, except for what is described in this section, without your consent."),r.a.createElement(s.Typography,{variant:"body2"},"Your personal data may be disclosed to partners of DHI (providers who deliver services on behalf of DHI), for example IT service providers, and in relation to sending out newsletters. These partners only process the personal data on behalf of DHI and in accordance with DHI’s instructions. Furthermore, your personal data may be shared with business partners, e.g. freight companies, for the delivery of goods you buy in our webshop."),r.a.createElement(s.Typography,{variant:"body2"},"Your personal data may also be shared within the DHI group with all DHI affiliated companies. A list of all affiliated companies may be found on the following link:"," ",r.a.createElement(s.Link,{href:"https://www.dhigroup.com/privacy/sharing-of-personal-data#companies",variant:"body2",className:t.link},"https://www.dhigroup.com/privacy/sharing-of-personal-data#companies")),r.a.createElement(s.Typography,{variant:"body2"},"Under specific circumstances and with reference to legislation, it might be necessary to transfer information to public authorities or the police. For example, information may be disclosed to the police in case of suspicion of credit card fraud."),r.a.createElement(s.Typography,{variant:"body2"},"In the case of a re-organization, full or partial sale of the company, any disclosure in such connection will be in accordance with current legislation for the processing of personal data."),r.a.createElement(s.Typography,{variant:"body2"},"If your personal data are transferred to data controllers or data processors, which are located in countries outside the EU/EEA not ensuring an adequate level of data protection, such transfers will be adequately safeguarded by DHI, e.g. via the EU Commission’s Standard Contractual Clauses. Please contact us if you wish further information.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"5. DELETION OF PERSONAL DATA"),r.a.createElement(s.Typography,{variant:"body2"},"We will delete your personal data when we no longer need to process them in relation to one or more of the purposes set out above. However, the data may be processed and stored for a longer period in anonymized form."),r.a.createElement(s.Typography,{variant:"body2"},"We take appropriate measures to ensure that we process and store your personal data based on:"),r.a.createElement(s.Typography,{variant:"body2"},"* as a minimum for the time period in which we deliver a service to you,"),r.a.createElement(s.Typography,{variant:"body2"},"* in accordance with law, contract, or our legal obligations,"),r.a.createElement(s.Typography,{variant:"body2"},"* or as long as the data are necessary in order for the purposes for which they are collected, or longer if it is required by contract, applicable law, or for statistical purposes governed by appropriate security measures.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"6. COOKIES"),r.a.createElement(s.Typography,{variant:"body2"},"We use cookies on our website. You can read more about the use of cookies in our Cookie Policy, which you can find on the following link:",r.a.createElement(s.Link,{href:"https://www.dhigroup.com/cookie-page",className:t.link},"https://www.dhigroup.com/cookie-page"))),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"7. SECURITY"),r.a.createElement(s.Typography,{variant:"body2"},"We have implemented security measures to ensure that our internal procedures meet our high security policy standards. For example, we use encryption. Further, we strive to ensure the ongoing confidentiality, integrity, availability and resilience when processing your personal data. In the event of physical or technical incidents, we make every effort to restore the availability and access to your personal data in a timely manner. We also have processes for assessing and evaluating the effectiveness in order to ensure that the security level is sufficient.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"8. YOUR RIGHTS"),r.a.createElement(s.Typography,{variant:"body2"},"You are at any time entitled to be informed of the personal data about you that we process, but with certain legislative exceptions. You also have the right to object to the collection and further processing of your personal data including profiling/automated decision-making. Furthermore, you have the right to have your personal data rectified, erased or blocked according to the rules. Moreover, you have the right to receive information about you that you have provided to us, and the right to have this information transmitted to another data controller (data portability).")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"9. WITHDRAWAL OF CONSENT"),r.a.createElement(s.Typography,{variant:"body2"},"You may, at any time, withdraw any consent you have given and we will delete your personal data, unless we can continue the processing based on another purpose. If you wish to withdraw your consent, please contact us at",r.a.createElement(s.Link,{href:"info@dhigroup.com",className:t.link},"info@dhigroup.com"),"or +45 4516 9200.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"10. LINKS TO OTHER WEBSITES ETC."),r.a.createElement(s.Typography,{variant:"body2"},"Our website may contain links to other websites or to integrated sites. We are not responsible for the contents of the websites of other companies or for the practices of such companies regarding the collection of personal data. When you visit other websites, you should read the owners' policies on the protection of personal data and other relevant policies.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"11. CHANGES TO OUR PRIVACY POLICY"),r.a.createElement(s.Typography,{variant:"body2"},"We reserve the right to change this privacy policy based on material changes in legislation, new technological solutions, new or improved features, or to improve our websites.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"12. AMENDMENT OF DATA ETC."),r.a.createElement(s.Typography,{variant:"body2"},"If you want us to update, amend or delete the personal data that we have recorded about you, or if you wish to get access to the data being processed about you, or if you have any questions concerning the above guidelines, you may contact us at"," ",r.a.createElement(s.Link,{href:"info@dhigroup.com",className:t.link},"info@dhigroup.com")," ","or +45 4516 9200. You may also write to us at the following address:DHI, Agern Allé 5, 2970 Hørsholm, Denmark")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"13. COMPLAINTS"),r.a.createElement(s.Typography,{variant:"body2"},"If you wish to appeal against the processing of your personal data, please contact us by email, telephone or letter as indicated above. You may also contact the Data Protection Agency, Borgergade 28, 5., 1300 Copenhagen K, Denmark.")))})),m=function(){return r.a.createElement(s.Box,null,r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{variant:"body2"},'At DHI ("DHI", "we" or “us”) data protection and confidentiality is a high priority. This privacy policy sets out clear guidelines for how DHI processes your personal data. Further, we explain how we use the personal data that you leave and/or provide when you visit our websites or when you interact with us with various business relations.'),r.a.createElement(s.Typography,{variant:"body2"},"The Terms addresses your legal rights and obligations and includes important disclaimers and choice of law and forum provisions. Please read carefully. The Terms apply to all websites of DHI Group, including sites for registered users.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"OWNERSHIP OF THE WEBSITE"),r.a.createElement(s.Typography,{variant:"body2"},"The website is owned and operated by DHI (referred as we/us in these Terms), a corporation incorporated under the laws of Denmark, having its principal office in Hørsholm.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"USE LICENSE"),r.a.createElement(s.Typography,{variant:"body2"},"Please feel free to browse the website. We grant you permission to view this website and to print or download material displayed on the website for your own personal, non-commercial use, provided that you agree to and accept without modification the notices, terms and conditions set forth in this agreement and provided that you keep intact all copyright, trademark and other proprietary notices. You may not however copy, reproduce, republish, upload, transmit or distribute in any way the contents of this website, including the text, images, audio and video for public or commercial purposes, without written permission from us. You are also prohibited from using any content of this website in a frame on any other internet site in any way."),r.a.createElement(s.Typography,{variant:"body2"},"Your use of this website constitutes your agreement and acceptance without modification of the notices, terms and conditions set forth herein. In addition as a condition of your use of this website, you represent and warrant to us that you will not use this website for any purpose that is unlawful, immoral or prohibited by these terms, conditions and notices.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"USER SUBMISSIONS"),r.a.createElement(s.Typography,{variant:"body2"},"Any communication or material that you transmit to the website by e-mail or otherwise is, and will be treated as non-confidential and non-proprietary information. Anything you transmit or post may be used by us for any purpose. You are prohibited from posting or transmitting to or from this Site any unlawful, threatening, libellous, defamatory, obscene, pornographic, or other material that may violate any law.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"LINKS TO AND FROM OTHER MATERIALS"),r.a.createElement(s.Typography,{variant:"body2"},"We may provide hyperlinks to third party sites. The linked sites are not under our control and in no way are we responsible for the content of any such linked site or for the content of any site linked to such linked site. We do not endorse companies or products to which it may provide hyperlinks and we reserve the right to note as such on our Site. We reserve the unilateral right to terminate any link or linking program at any time. If you decide to access any of the third party sites linked to this website, you do so at your own risk. Third parties may only provide hyperlinks to our main homepage. Any links to underlying sites require a prior written approval from us.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"CONTENT"),r.a.createElement(s.Typography,{variant:"body2"},"We take great care in creating and maintaining this website, and in providing accurate and up-to-date content. However, the content of this website is subject to frequent modifications without prior notice. Therefore, we do not guarantee the correct and actual status of said content. The visitors to the website accept our exoneration of any liability whatsoever for the content of the website, the software on the website or for any use made of it.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"INTELLECTUAL PROPERTY"),r.a.createElement(s.Typography,{variant:"body2"},"The texts, layouts, drawings, databases and other items on this website, as well as the website itself, are protected by copyright and by the right of the producer of the database. Some of the names, signs and logos on this website are protected trademarks or trade names. Nothing contained on the website should be construed as granting any license or right to use any trademark, displayed on the website without the written permission from us or such third party that may own the trademarks displayed on the website. Any copy, adaptation, translation, arrangement, modification, or any use whatsoever of the whole or of any part of this website of its protected elements, in any form and by any means, is strictly prohibited.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"DATA PROTECTION"),r.a.createElement(s.Typography,{variant:"body2"},"We collect and process information on the behaviour of the users of this Site for statistical and marketing purposes. The user has the right to oppose, free of charge, the processing for marketing purposes of the data concerning him, and has the right to access personal data and correct such data. For more information regarding the data that we collect and the measures we take to protect the privacy of our user data please refer to our Privacy Policy.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"LIABILITY"),r.a.createElement(s.Typography,{variant:"body2"},"Your use of and browsing in this Site is at your own risk. DHI does not warrant that the software used for this Site, and the information, the on-line applications, or any other services provided by means of this Site are error-free, or that their use will be uninterrupted. DHI expressly disclaims all warranties related to the above-mentioned subject matter, including, without limitation, those of accuracy, condition, merchantability and fitness for particular purpose. Notwithstanding anything to the contrary in this Site, in no event shall DHI be liable for any loss of profits, revenues, indirect, special, incidental, consequential, or other similar damages arising out of or in connection with this Site or out of the use of any of the services proposed by means of this Site.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"PRODUCT ORDERS"),r.a.createElement(s.Typography,{variant:"body2"},"While we will use our best efforts to fulfill all orders, we cannot guarantee the availability of any particular product displayed on this website. We reserve the right to discontinue the sale of any product listed on this website at any time without notice.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"UPDATES"),r.a.createElement(s.Typography,{variant:"body2"},"We reserve the unilateral right to update, modify, change and alter our Terms and Privacy Policy at any time. All such updates, modifications, changes and alterations are binding on all users and browsers of our website and will be posted here.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"SOFTWARE LICENSES"),r.a.createElement(s.Typography,{variant:"body2"},"You shall have no rights to the proprietary software and related documentation, or any enhancements or modifications thereto, which may be provided to you in order to access specified areas within the website. You may not sublicense, assign or transfer any licenses granted by us, and any attempt at such sublicense, assignment or transfer shall be null and void. You may not otherwise copy, distribute, modify, reverse engineer, or create derivative works from such software.")),r.a.createElement(s.Box,{py:1},r.a.createElement(s.Typography,{gutterBottom:!0,variant:"subtitle1"},"CHOICE OF LAW AND FORUM PROVISIONS"),r.a.createElement(s.Typography,{variant:"body2"},"This website resides on a server in Hørsholm, Denmark. You agree that these Terms and your use of this website are governed by the laws of Denmark. You hereby consent to the jurisdiction and venue of the Municipal Court of Lyngby, Denmark in all disputes (a) arising out of, relating to, or concerning this website and/or these Terms, (b) in which this website and/or these Terms is an issue or a material fact, or (c) in which this website and/or these Terms is referenced in a paper filed in a court, tribunal, agency or other dispute resolution organisation. We have endeavoured to comply with all legal requirements known to us in creating and maintaining this website, but make no representation that materials on this website are appropriate or available for use in any particular jurisdiction. You are responsible for compliance with applicable laws. Any use in contravention of this provision or any provision of these Terms is at your own risk and, if any part of these Terms is invalid or unenforceable under applicable law, the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of these Terms shall govern such use.")))},f=a(6),g=a.n(f),b=Object(s.createMuiTheme)({themeName:"GRAS Theme",palette:{primary:{main:"#0B4566"},secondary:{main:"#00A4EC","&:hover":"#0076C8"},medium:{grey:{light:{color:"#F2F5F7"}}}},flexLayout:{display:"flex",flexDirection:"column",flex:1},typography:{h6:{color:"#0B4566",fontSize:14,backgroundColor:"#F2F5F7",padding:"8px 16px",borderTop:"1px solid #DBE4E9",borderBottom:"1px solid #DBE4E9"},p:{fontSize:12},subtitle1:{fontSize:12,fontWeight:"bold"},body2:{fontSize:12,marginBottom:16}},drawerColor:"#ffffff",drawerWidth:"50vw",overrides:{MuiButton:{root:{backgroundColor:"#00A4EC",color:"#fff",fontSize:12,textTransform:"initial",padding:"8px 16px","&:disabled":{backgroundColor:"#97DBF9",color:"#fff"},"&:hover":{backgroundColor:"#0076C8"}},containedSecondary:{backgroundColor:"#00A4EC",color:"#fff","&:disabled":{backgroundColor:"rgb(242, 245, 247)",color:"rgba(207,219,226)"}}},MuiCardContent:{root:{padding:0,"&:last-child":{paddingBottom:0}}},MuiCheckbox:{root:{padding:"0px",MuiSvgIcon:{root:{width:"12px"}}}},MuiAccordion:{root:{"&$expanded":{margin:0},"&:before":{backgroundColor:"none"}}},MuiAccordionDetails:{root:{borderBottom:"1px solid #DBE4E9",padding:16}},MuiAccordionSummary:{content:{margin:"8px 0px ","&$expanded":{margin:"8px 0px "}},root:{backgroundColor:"#F8F8F8",borderBottom:"1px solid #DBE4E9",padding:"0px 16px",minHeight:0,"&$expanded":{minHeight:0,backgroundColor:"#F2F5F7"},"&:hover":{backgroundColor:"#F2F5F7"}}},MuiFormControlLabel:{root:{width:"50%",marginLeft:"0px",marginRight:"0px","Mui-disabled":{"-webkit-text-fill-color":"rgba(207,219,226)",opacity:1}},label:{fontSize:"12px",paddingLeft:".2rem"}},MuiIconButton:{root:{width:36,height:36,padding:0,borderRadius:0}},MuiInputBase:{root:{fontSize:12,color:"#0B4566",padding:"6px 0px"},input:{padding:0,color:"#0B4566"}},MuiInputLabel:{root:{color:"#0B4566",fontSize:12,padding:2}},MuiPaper:{root:{color:"#0B4566"},rounded:{borderRadius:0},elevation1:{boxShadow:"none"}},MuiPickersBasePicker:{pickerView:{minHeight:0}},MuiPickersCalendar:{transitionContainer:{minHeight:170}},MuiPickersDay:{day:{height:32,padding:"8px 0px"},daySelected:{borderRadius:4}},MuiToolbar:{regular:{minHeight:56,"@media (min-width: 600px)":{minHeight:56}}}}});function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],o=!0,r=!1,n=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);o=!0);}catch(e){r=!0,n=e}finally{try{o||null==s.return||s.return()}finally{if(r)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=e[a];return o}var E=[{title:"FAQ",component:p},{title:"About",component:l},{title:"Contact",component:u},{title:"Disclaimer",component:d},{title:"Privacy",component:y},{title:"Terms",component:m}],T=function(){var e=w(r.a.useState(),2),t=e[0],a=e[1];return r.a.createElement(s.Box,null,E.map((function(e){var o,n=e.title,i=e.component;return r.a.createElement(s.Accordion,{key:n,expanded:t===n,onChange:(o=n,function(e,t){a(!!t&&o)})},r.a.createElement(s.AccordionSummary,{expandIcon:r.a.createElement(g.a,{style:{color:b.palette.primary.main,padding:4,width:"16px"}}),"aria-controls":"panel1bh-content",id:"panel1bh-header"},r.a.createElement(s.Typography,{variant:"h5",style:{fontSize:12}},n)),r.a.createElement(s.AccordionDetails,null,r.a.createElement(i,null)))})))};T.propTypes={title:i.a.string,component:i.a.elementType};var x=T,k=a(3),S=a(5),B=a(7),I=a(4),O=a(8);function A(e,t,a,o,r,n,i){try{var s=e[n](i),l=s.value}catch(e){return void a(e)}s.done?t(l):Promise.resolve(l).then(o,r)}function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){P(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function P(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var H={color:"#00A4EC",textAlign:"center"},F=Object(I.makeStyles)({h4:{fontSize:24,fontWeight:700,color:"#0B4566"}}),W=function(e){var t=e.disableButtonOnLoad,a=void 0===t||t,r=e.fields,n=void 0===r?[]:r,i=e.validationSchema,l=void 0===i?O.object():i,c=e.onSubmitForm,u=void 0===c?function(){}:c,d=e.title,p=void 0===d?"":d;return o.createElement(s.ThemeProvider,{theme:b},o.createElement(s.Paper,null,o.createElement(s.Box,{p:4},p&&o.createElement(s.Box,{pb:2},o.createElement(s.Typography,{variant:"h4",className:F.h4,style:H},p)),o.createElement(k.Formik,{initialValues:n.reduce((function(e,t){return e=C(C({},e),{},P({},t.name,t.initialValue))}),{}),validationSchema:l,onSubmit:function(){var e,t=(e=regeneratorRuntime.mark((function e(t,a){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.setSubmitting,e.next=3,u(t);case 3:setTimeout((function(){o(!1)}),2e3);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(o,r){var n=e.apply(t,a);function i(e){A(n,o,r,i,s,"next",e)}function s(e){A(n,o,r,i,s,"throw",e)}i(void 0)}))});return function(e,a){return t.apply(this,arguments)}}(),isInitialValid:!a},(function(e){var t=e.errors,a=e.isSubmitting,r=e.submitForm,i=e.isValid,l=e.touched;return o.createElement(k.Form,{style:{padding:16}},a&&o.createElement(s.Box,{height:240,display:"flex",alignItems:"center"},o.createElement(s.Grid,{container:!0,alignItems:"center",justify:"center"},o.createElement(B.BounceLoader,{size:40,color:"#00A4EC"}))),!a&&o.createElement(s.Grid,{container:!0},n.map((function(e,a){return"TextField"===e.componentType?o.createElement(s.Grid,{item:!0,xs:e.fullWidth?12:6,key:"item-".concat(e.name,"=").concat(a)},o.createElement(k.Field,{multiline:e.multiline,component:S.TextField,name:e.name,type:e.type,label:e.label,style:{width:"100%"}}),o.createElement("br",null)):"Select"===e.componentType?o.createElement(s.Grid,{item:!0,xs:e.fullWidth?12:6,key:"item-".concat(e.name,"=").concat(a)},o.createElement(s.FormControl,{style:{width:"100%"}},e.hasOwnProperty("label")&&o.createElement(s.InputLabel,{className:t.hasOwnProperty("country")&&l.hasOwnProperty("country")?"Mui-error":"",htmlFor:e.inputProps.id},e.label),o.createElement(k.Field,{className:t.hasOwnProperty("country")&&l.hasOwnProperty("country")?"Mui-error":"",component:S.Select,name:e.name,inputProps:e.inputProps,children:e.items.map((function(e,t){return o.createElement(s.MenuItem,{key:"selectItem-".concat(e.name,"-").concat(t),value:e.value},e.name)}))}),t.hasOwnProperty("country")&&l.hasOwnProperty("country")&&o.createElement(s.FormHelperText,{required:!0,error:!0},"Required")),o.createElement("br",null)):0})),o.createElement(s.Button,{type:"submit",variant:"contained",color:"secondary",fullWidth:!0,disabled:!i,onClick:r,style:{marginTop:"1rem"}},"Submit")))})))))};W.propTypes={title:i.a.string,disableButtonOnLoad:i.a.bool,validationSchema:i.a.object,fields:i.a.array,onSubmitForm:i.a.func};var R=W,N=a.p+"2f200e9530887fc7384a635b7c6df7d6.png",M=Object(I.makeStyles)({container:{padding:16},titleMain:{fontSize:20,fontWeight:500,padding:0,margin:0},subTitle:{fontSize:12,padding:0,margin:0}}),L=function(e){var t=e.title,a=void 0===t?"Current title":t,o=e.subTitle,n=void 0===o?[""]:o,i=e.imageSelect,l=void 0===i?N:i,c=e.imageFile,u=void 0===c?[]:c,d=e.imageWidth,p=void 0===d?38:d,h=e.backgroundColor,y=void 0===h?"transparent":h,m=e.titleColor,f=void 0===m?"primary":m,g=e.subTitleColor,b=void 0===g?"secondary":g,w=e.bottomBorderSize,v=e.bottomBorderColor,E=M();return r.a.createElement(s.Box,{className:E.container,style:{backgroundColor:y,borderBottom:"".concat(w,"px solid ").concat(v)}},r.a.createElement(s.Grid,{container:!0,spacing:0,justify:"space-between"},r.a.createElement(s.Grid,{item:!0,xs:10},r.a.createElement(s.Typography,{className:E.titleMain,style:{color:f},color:"primary"},a)),l&&r.a.createElement(s.Grid,{item:!0},r.a.createElement("img",{src:u[0]?u[0]:l,alt:"DHI Logo",style:{width:p}}))),(n||n.length>0)&&r.a.createElement(r.a.Fragment,null,n.map((function(e,t){return r.a.createElement(s.Typography,{key:"subtitle-".concat(t),className:E.subTitle,style:{color:b},color:"secondary"},e)}))))};L.propTypes={title:i.a.string,subTitle:i.a.array,imageSelect:i.a.node,imageFile:i.a.node,imageWidth:i.a.number,backgroundColor:i.a.string,titleColor:i.a.string,subTitleColor:i.a.string,bottomBorderSize:i.a.number,bottomBorderColor:i.a.string};var j=L}]);