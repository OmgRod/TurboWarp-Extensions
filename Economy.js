class EconomyExtension {
    constructor() {
        this.playerCurrencies = {};
    }

    getInfo() {
        return {
            id: 'economy',
            name: 'Economy',
            blocks: [
                {
                    opcode: 'giveCurrency',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Give [CURRENCY] currency to [PLAYER]',
                    arguments: {
                        CURRENCY: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10
                        },
                        PLAYER: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Player1'
                        }
                    }
                },
                {
                    opcode: 'removeCurrency',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Remove [CURRENCY] currency from [PLAYER]',
                    arguments: {
                        CURRENCY: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10
                        },
                        PLAYER: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Player1'
                        }
                    }
                },
                {
                    opcode: 'getCurrency',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[PLAYER] has [CURRENCY] currency',
                    arguments: {
                        PLAYER: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Player1'
                        }
                    }
                },
                {
                    opcode: 'swapCurrency',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Swap [CURRENCY] currency between [PLAYER1] and [PLAYER2]',
                    arguments: {
                        CURRENCY: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10
                        },
                        PLAYER1: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Player1'
                        },
                        PLAYER2: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Player2'
                        }
                    }
                },
                {
                    opcode: 'setCurrency',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set [PLAYER]\'s currency to [CURRENCY]',
                    arguments: {
                        PLAYER: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Player1'
                        },
                        CURRENCY: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 100
                        }
                    }
                },
                {
                    opcode: 'transferCurrency',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Transfer [CURRENCY] currency from [PLAYER1] to [PLAYER2]',
                    arguments: {
                        CURRENCY: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10
                        },
                        PLAYER1: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Player1'
                        },
                        PLAYER2: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Player2'
                        }
                    }
                },
                {
                    opcode: 'currencyBalance',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[PLAYER] has [CURRENCY] currency',
                    arguments: {
                        PLAYER: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Player1'
                        }
                    }
                },
                {
                    opcode: 'currencyExists',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[PLAYER] has currency?',
                    arguments: {
                        PLAYER: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Player1'
                        }
                    }
                }
            ]
        };
    }

    // Command to give currency to a player
    giveCurrency(args) {
        const { CURRENCY, PLAYER } = args;
        if (!this.playerCurrencies[PLAYER]) {
            this.playerCurrencies[PLAYER] = 0;
        }
        this.playerCurrencies[PLAYER] += CURRENCY;
    }

    // Command to remove currency from a player
    removeCurrency(args) {
        const { CURRENCY, PLAYER } = args;
        if (this.playerCurrencies[PLAYER] && this.playerCurrencies[PLAYER] >= CURRENCY) {
            this.playerCurrencies[PLAYER] -= CURRENCY;
        }
    }

    // Reporter to get the currency balance of a player
    getCurrency(args) {
        const { PLAYER } = args;
        return this.playerCurrencies[PLAYER] || 0;
    }

    // Command to swap currency between two players
    swapCurrency(args) {
        const { CURRENCY, PLAYER1, PLAYER2 } = args;
        if (this.playerCurrencies[PLAYER1] >= CURRENCY && this.playerCurrencies[PLAYER2] >= CURRENCY) {
            this.playerCurrencies[PLAYER1] -= CURRENCY;
            this.playerCurrencies[PLAYER2] += CURRENCY;
        }
    }

    // Command to set a player's currency to a specific amount
    setCurrency(args) {
        const { PLAYER, CURRENCY } = args;
        this.playerCurrencies[PLAYER] = CURRENCY;
    }

    // Command to transfer currency from one player to another
    transferCurrency(args) {
        const { CURRENCY, PLAYER1, PLAYER2 } = args;
        if (this.playerCurrencies[PLAYER1] >= CURRENCY) {
            this.playerCurrencies[PLAYER1] -= CURRENCY;
            this.playerCurrencies[PLAYER2] = (this.playerCurrencies[PLAYER2] || 0) + CURRENCY;
        }
    }

    // Reporter to check the currency balance of a player
    currencyBalance(args) {
        const { PLAYER } = args;
        return this.playerCurrencies[PLAYER] || 0;
    }

    // Boolean to check if a player has currency
    currencyExists(args) {
        const { PLAYER } = args;
        return this.playerCurrencies[PLAYER] > 0;
    }
}

Scratch.extensions.register(new EconomyExtension());
