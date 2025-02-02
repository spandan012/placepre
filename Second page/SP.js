// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Microsoft Interview Card</title>
// //     <link rel="stylesheet" href="SP.css">
// // </head>
// // <body>
// //     <div class="container">
// //         <div class="card">
// //             <!-- Header with gradient -->
// //             <div class="card-header">
// //                 <div class="logo">
// //                     <div class="logo-grid">
// //                         <div class="logo-square orange"></div>
// //                         <div class="logo-square green"></div>
// //                         <div class="logo-square blue"></div>
// //                         <div class="logo-square yellow"></div>
// //                     </div>
// //                     <div class="title-container">
// //                         <span class="company-name">Microsoft</span>
// //                         <span class="title">Interview Questions</span>
// //                     </div>
// //                 </div>
// //             </div>
            
// //             <!-- Content with solid color -->
// //             <div class="card-content">
// //                 <ul class="points">
// //                     <li>Interview Process at Microsoft</li>
// //                     <li>Tips for interviewing at Microsoft</li>
// //                     <li>100+ Interview Questions Asked at Microsoft</li>
// //                 </ul>
// //                 <button class="view-guide">View Full Guide</button>
// //             </div>
// //         </div>
// //     </div>
// // </body>
// // </html>

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #f0f0f0;
// }

// .container {
//   padding: 20px;
//   width: 100%;
//   max-width: 400px;
// }

// .card {
//   border-radius: 12px;
//   overflow: hidden;
//   background-color: white;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// }

// /* Header section with gradient */
// .card-header {
//   background: linear-gradient(to right, #F6D365, #7645d9, #5E35B1);
//   padding: 20px;
//   color: white;
// }

// .logo {
//   display: flex;
//   align-items: flex-start;
//   gap: 12px;
// }

// .logo-grid {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 2px;
//   width: 24px;
//   height: 24px;
//   background: white;
//   padding: 2px;
//   border-radius: 4px;
//   flex-shrink: 0;
// }

// .logo-square {
//   width: 100%;
//   height: 100%;
//   border-radius: 1px;
// }

// .orange { background-color: #F25022; }
// .green { background-color: #7FBA00; }
// .blue { background-color: #00A4EF; }
// .yellow { background-color: #FFB900; }

// .title-container {
//   display: flex;
//   flex-direction: column;
// }

// .company-name {
//   font-weight: 600;
//   font-size: 16px;
//   margin-bottom: 2px;
// }

// .title {
//   font-size: 16px;
//   opacity: 0.9;
// }

// /* Content section with solid color */
// .card-content {
//   background-color: white;
//   padding: 20px;
// }

// .points {
//   list-style: none;
//   margin-bottom: 24px;
// }

// .points li {
//   color: #666;
//   margin-bottom: 12px;
//   font-size: 15px;
//   position: relative;
//   padding-left: 16px;
// }

// .points li::before {
//   content: "•";
//   position: absolute;
//   left: 0;
//   color: #666;
// }

// .points li:last-child {
//   margin-bottom: 0;
// }

// .view-guide {
//   background-color: #00FFD5;
//   color: black;
//   border: none;
//   border-radius: 8px;
//   padding: 12px 24px;
//   font-weight: 600;
//   font-size: 14px;
//   cursor: pointer;
//   width: 100%;
//   transition: opacity 0.2s ease;
// }

// .view-guide:hover {
//   opacity: 0.9;
// }


