/**
 * Validates translation coverage between en.json and es.json by checking:
 * - Missing/unused translation keys
 * - Identical text that may need translation (excluding approved matches)
 */

const enJson = require('./en.json');
const esJson = require('./es.json');
const {identicalKeysEnEs} = require('./identicalKeysEnEs');

const enKeys = Object.keys(enJson);
const esKeys = Object.keys(esJson);

const missingKeys = enKeys.filter((key) => !esKeys.includes(key));
const unusedKeys = esKeys.filter((key) => !enKeys.includes(key));

if (missingKeys.length > 0 || unusedKeys.length > 0) {
  console.log('\nMISSING: These keys need to be added to es.json:');
  console.log(missingKeys);
  console.log('\nUNUSED: These keys in es.json are not in en.json:');
  console.log(unusedKeys);
} else {
  console.log('SUCCESS: All keys match between en.json and es.json');
}

const untranslatedValues = enKeys.filter((key) =>
  enJson[key].defaultMessage === esJson[key] && !identicalKeysEnEs.includes(key),
);
if (untranslatedValues.length > 0) {
  console.log('\nIDENTICAL: These keys have identical text in both languages');
  console.log('(If any of these are intentionally identical, add them to identicalKeysEnEs.js):');
  console.log(untranslatedValues);
}

// Check for keys in identicalKeysEnEs that no longer exist in either translation file
const nonexistentIdenticalKeys = identicalKeysEnEs.filter(
    (key) => !enKeys.includes(key) || !esKeys.includes(key),
);
if (nonexistentIdenticalKeys.length > 0) {
  console.log('\nOUTDATED MATCH: These keys in identicalKeysEnEs.js no longer exist in translations:');
  console.log(nonexistentIdenticalKeys);
}
