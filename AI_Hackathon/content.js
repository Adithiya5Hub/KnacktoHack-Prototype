// Function to check if a comment is sensitive based on organizational policies
function isSensitiveComment(comment) {
 var sensitiveKeywords = ["sensitive", "confidential", "private", "personal", "inappropriate", "offensive","kill","hack"];

  // Convert the comment to lowercase for case-insensitive matching
  var lowercaseComment = comment.toLowerCase();

  // Check if the comment contains any sensitive keywords
  for (let keyword of sensitiveKeywords) {
  if (lowercaseComment.includes(keyword.toLowerCase())) {
    return true; // Comment is sensitive if any keyword is found
  }
}

  return false;
}

// Function to monitor user interactions with ChatGPT
function monitorChatGPT() {
  // Listen for changes in the ChatGPT input field
  document.querySelector('textarea').addEventListener('input', function(event) {
      // Get the user's input comment
      var comment = event.target.value;

      // Check if the comment is sensitive
      if (isSensitiveComment(comment)) {
          // Flag the comment as inappropriate
          alert('Sensitive comment detected: ' + comment);
          // You can implement your logic here to flag the comment, such as sending a notification or disabling the submit button
          // For demonstration purposes, we'll just log the detected comment to the console
          console.log('Sensitive comment detected: ' + comment);
      }
  });
}

// Call the monitorChatGPT function when the page is loaded
monitorChatGPT();
