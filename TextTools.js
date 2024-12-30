class TextTools {
    getInfo() {
      return {
        id: 'texttools',
        name: 'Text Tools',
        blocks: [
          {
            opcode: 'getTextInput',
            blockType: Scratch.BlockType.REPORTER,
            text: '[TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world!'
              }
            }
          },
          {
            opcode: 'endsIn',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[TEXT] ends in [ENDING]?',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world!'
              },
              ENDING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'world!'
              }
            }
          },
          {
            opcode: 'removeFromEnd',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Remove [SUBSTRING] from the end of [TEXT]',
            arguments: {
              SUBSTRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'world!'
              },
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world!'
              }
            }
          },
          {
            opcode: 'startsWith',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[TEXT] starts with [START]?',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world!'
              },
              START: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello'
              }
            }
          },
          {
            opcode: 'removeFromStart',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Remove [SUBSTRING] from the start of [TEXT]',
            arguments: {
              SUBSTRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello'
              },
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world!'
              }
            }
          },
          {
            opcode: 'getLength',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Length of [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world!'
              }
            }
          },
          {
            opcode: 'toUpperCase',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Convert [TEXT] to uppercase',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world!'
              }
            }
          },
          {
            opcode: 'toLowerCase',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Convert [TEXT] to lowercase',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world!'
              }
            }
          },
          {
            opcode: 'trimWhitespace',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Trim whitespace from [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '  Hello, world!  '
              }
            }
          },
          {
            opcode: 'findSubstring',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Find [SUBSTRING] in [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world!'
              },
              SUBSTRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'world'
              }
            }
          },
          {
            opcode: 'replaceSubstring',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Replace [OLD] with [NEW] in [TEXT]',
            arguments: {
              OLD: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'world'
              },
              NEW: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'there'
              },
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world!'
              }
            }
          },
          {
            opcode: 'repeatText',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Repeat [TEXT] [TIMES] times',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello'
              },
              TIMES: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3
              }
            }
          },
          {
            opcode: 'padStart',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Pad [TEXT] with [PAD] at the start to [LENGTH] characters',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'world'
              },
              PAD: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              },
              LENGTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              }
            }
          },
          {
            opcode: 'padEnd',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Pad [TEXT] with [PAD] at the end to [LENGTH] characters',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'world'
              },
              PAD: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              },
              LENGTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              }
            }
          },
          {
            opcode: 'replaceFirstOccurrence',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Replace first occurrence of [OLD] with [NEW] in [TEXT]',
            arguments: {
              OLD: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'world'
              },
              NEW: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'there'
              },
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world! world!'
              }
            }
          },
          {
            opcode: 'isEmpty',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Is [TEXT] empty?',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world!'
              }
            }
          },
          {
            opcode: 'extractSubstring',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Extract from [START] to [END] in [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world!'
              },
              START: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 7
              },
              END: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 12
              }
            }
          },
          {
            opcode: 'splitText',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Split [TEXT] by [SEPARATOR]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple,banana,orange'
              },
              SEPARATOR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ','
              }
            }
          },
          {
            opcode: 'joinArray',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Join [ARRAY] with [SEPARATOR]',
            arguments: {
              ARRAY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple,banana,orange'
              },
              SEPARATOR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ','
              }
            }
          },
          {
            opcode: 'substringFromIndex',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Substring of [TEXT] from index [INDEX]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world!'
              },
              INDEX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 7
              }
            }
          },
          {
            opcode: 'removeSpaces',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Remove all spaces from [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' H e l l o ,   w o r l d ! '
              }
            }
          },
          {
            opcode: 'countOccurrences',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Count occurrences of [SUBSTRING] in [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world! world!'
              },
              SUBSTRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'world'
              }
            }
          },
          {
            opcode: 'repeatUntil',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Repeat [TEXT] until it contains [SUBSTRING]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hi'
              },
              SUBSTRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello'
              }
            }
          },
          {
            opcode: 'getFirstCharacter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'First character of [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world!'
              }
            }
          },
          {
            opcode: 'getLastCharacter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Last character of [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world!'
              }
            }
          },
          {
            opcode: 'isPalindrome',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[TEXT] is a palindrome?',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'madam'
              }
            }
          },
          {
            opcode: 'convertToTitleCase',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Convert [TEXT] to title case',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'hello world'
              }
            }
          },
          {
            opcode: 'convertToSentenceCase',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Convert [TEXT] to sentence case',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'hello world'
              }
            }
          },
          {
            opcode: 'reverseString',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Reverse [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello, world!'
              }
            }
          },
          {
            opcode: 'removeNonAlphanumeric',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Remove all non-alphanumeric from [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello!@#$, world.'
              }
            }
          }
        ]
      };
    }

    getTextInput(args) {
      return args.TEXT;
    }

    endsIn(args) {
      const { TEXT, ENDING } = args;
      return TEXT.endsWith(ENDING);
    }

    removeFromEnd(args) {
      const { TEXT, SUBSTRING } = args;
      if (TEXT.endsWith(SUBSTRING)) {
        return TEXT.slice(0, -SUBSTRING.length);
      }
      return TEXT;
    }

    startsWith(args) {
      const { TEXT, START } = args;
      return TEXT.startsWith(START);
    }

    removeFromStart(args) {
      const { TEXT, SUBSTRING } = args;
      if (TEXT.startsWith(SUBSTRING)) {
        return TEXT.slice(SUBSTRING.length);
      }
      return TEXT;
    }

    getLength(args) {
      return args.TEXT.length;
    }

    toUpperCase(args) {
      return args.TEXT.toUpperCase();
    }

    toLowerCase(args) {
      return args.TEXT.toLowerCase();
    }

    trimWhitespace(args) {
      return args.TEXT.trim();
    }

    findSubstring(args) {
      const { TEXT, SUBSTRING } = args;
      return TEXT.indexOf(SUBSTRING);
    }

    replaceSubstring(args) {
      const { TEXT, OLD, NEW } = args;
      return TEXT.replace(new RegExp(OLD, 'g'), NEW);
    }

    // New utility methods:
    concatenate(args) {
      const { TEXT1, TEXT2 } = args;
      return TEXT1 + TEXT2;
    }

    repeatText(args) {
      const { TEXT, TIMES } = args;
      return TEXT.repeat(TIMES);
    }

    padStart(args) {
      const { TEXT, PAD, LENGTH } = args;
      return TEXT.padStart(LENGTH, PAD);
    }

    padEnd(args) {
      const { TEXT, PAD, LENGTH } = args;
      return TEXT.padEnd(LENGTH, PAD);
    }

    replaceFirstOccurrence(args) {
      const { TEXT, OLD, NEW } = args;
      return TEXT.replace(OLD, NEW);
    }

    isEmpty(args) {
      return args.TEXT === '';
    }

    extractSubstring(args) {
      const { TEXT, START, END } = args;
      return TEXT.slice(START, END);
    }

    splitText(args) {
      const { TEXT, SEPARATOR } = args;
      return TEXT.split(SEPARATOR);
    }

    joinArray(args) {
      const { ARRAY, SEPARATOR } = args;
      return ARRAY.join(SEPARATOR);
    }

    substringFromIndex(args) {
      const { TEXT, INDEX } = args;
      return TEXT.slice(INDEX);
    }

    removeSpaces(args) {
      return args.TEXT.replace(/\s+/g, '');
    }

    countOccurrences(args) {
      const { TEXT, SUBSTRING } = args;
      return (TEXT.match(new RegExp(SUBSTRING, 'g')) || []).length;
    }

    repeatUntil(args) {
      const { TEXT, SUBSTRING } = args;
      let repeatedText = TEXT;
      while (!repeatedText.includes(SUBSTRING)) {
        repeatedText += TEXT;
      }
      return repeatedText;
    }

    getFirstCharacter(args) {
      return args.TEXT.charAt(0);
    }

    getLastCharacter(args) {
      return args.TEXT.charAt(args.TEXT.length - 1);
    }

    isPalindrome(args) {
      const { TEXT } = args;
      const cleanText = TEXT.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      return cleanText === cleanText.split('').reverse().join('');
    }

    convertToTitleCase(args) {
      return args.TEXT.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }

    convertToSentenceCase(args) {
      const TEXT = args.TEXT;
      return TEXT.charAt(0).toUpperCase() + TEXT.slice(1).toLowerCase();
    }

    reverseString(args) {
      return args.TEXT.split('').reverse().join('');
    }

    removeNonAlphanumeric(args) {
      return args.TEXT.replace(/[^a-zA-Z0-9]/g, '');
    }
}

Scratch.extensions.register(new TextTools());
