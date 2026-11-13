function sanitizeLog(entry, disallowedCharacters) {
  disallowedCharacters.forEach((char) => {
    if (entry.includes(char)) {
      entry = entry.replaceAll(char, "#");
    }
  });
  return entry;
}

function cleanLogs (logs, disallowedCharacters) {
  const totalEntry = logs.length;

  let fatalMarker = false;
  let sanitizedEntry = 0;
  let informationalEntry = 0;
  
  for (const log of logs) {
    if (log.includes("$")) {
      fatalMarker = true;
      return "Sanitizing stopped. Failure Reason: Fatal character occurred.";
    }

    if (log.startsWith("/")) {
      informationalEntry++;
    } else if (log !== sanitizeLog(log, disallowedCharacters)) {
      sanitizedEntry++;
    }
  }

  if (!fatalMarker) {
    return `Total Entry Count: ${totalEntry}. Sanitized Entry Count: ${sanitizedEntry}. Informational Entry Count: ${informationalEntry}. Finished sanitizing logs.`;
  }
}
