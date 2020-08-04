import { Strings, LocaleTypes } from './constants'

interface IStrings {
  [Strings.SKILL_NAME]: string
  [Strings.WELCOME_MSG]: string
  [Strings.GOODBYE_MSG]: string
  [Strings.HELLO_MSG]: string
  [Strings.HELP_MSG]: string
  [Strings.ERROR_MSG]: string
  [Strings.REFLECTOR_MSG]: string
  [Strings.FALLBACK_MSG]: string
}

export const strings = {
  [LocaleTypes.enUS]: {
    translation: {
      SKILL_NAME: 'Hello World',
      WELCOME_MSG:
        'Welcome to Hello World! You can say help for a list of commands.',
      HELLO_MSG: 'Hello World!',
      HELP_MSG: 'Here is a list of commands you can say.',
      GOODBYE_MSG: 'Goodbye!',
      REFLECTOR_MSG: "You haven't implemented {{intentName}}",
      FALLBACK_MSG: "I'm sorry, I didn't understand, please try again.",
      ERROR_MSG:
        'Sorry, there was an error processing your command, please try again.'
    } as IStrings
  }
}
