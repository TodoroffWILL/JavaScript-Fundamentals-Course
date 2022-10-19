function loadingBar(percentLoaded) {
  let percentCount = "%".repeat(percentLoaded / 10);
  let dotsCount = ".".repeat(10 - percentLoaded / 10);

  if (percentLoaded == 100) {
    console.log("100% Complete! ");
  } else if (percentLoaded < 100) {
    console.log(`${percentLoaded}[${percentCount}${dotsCount}]`);
    console.log("Still loading...");
  }
}
loadingBar(30);
