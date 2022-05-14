import { LOCALES } from './locales';

export const messages = {
  [LOCALES.ENGLISH]: {
    header_edit: `Edit profile`,
    header_logout: `Log out`,
    header_search: `search`,
    header_newBoard: `Create new board`,
    footer_nameNikita: 'Nikita Kravchenko',
    footer_nameVadim: 'Vadim Ilyinchik',
    footer_nameKseniya: 'Kseniya Savitskaya',
    mainpage_welcome: 'Welcome!',
    signin_form__login: 'Login',
    signin_form__password: 'Password',
    signin_form__errors__login_required: 'Login is required',
    signin_form__errors__password_required: 'Password is required',
    signin_form__errors__login_min_length:
      'Login must be at least {minLength} characters, but {currentLength} characters given',
    signup_form__name: 'Name',
    signup_form__login: 'Login',
    signup_form__password: 'Password',
    signup_form__errors__name_required: 'Name is required',
    signup_form__errors__login_required: 'Login is required',
    signup_form__errors__password_required: 'Password is required',
    signup_form__errors__login_min_length:
      'Login must be at least {minLength} characters, but {currentLength} characters given',
  },
  [LOCALES.RUSSIAN]: {
    header_edit: 'Редактировать профиль',
    header_logout: `Выйти`,
    header_search: `поиск`,
    header_newBoard: `Создать новую доску`,
    footer_nameNikita: 'Никита Кравченко',
    footer_nameVadim: 'Вадим Ильинчик',
    footer_nameKseniya: 'Ксения Савицкая',
    mainpage_welcome: 'Добро пожаловать!',
    signin_form__login: 'Логин',
    signin_form__password: 'Пароль',
    signin_form__errors__login_required: 'Логин обязателен',
    signin_form__errors__password_required: 'Пароль обязателен',
    signin_form__errors__login_min_length:
      'Логин должен быть не менее {minLength} символов, вы ввели символов: {currentLength}',
    signup_form__name: 'Имя',
    signup_form__login: 'Логин',
    signup_form__password: 'Пароль',
    signup_form__errors__name_required: 'Имя обязательно',
    signup_form__errors__login_required: 'Логин обязателен',
    signup_form__errors__password_required: 'Пароль обязателен',
    signup_form__errors__login_min_length:
      'Логин должен быть не менее {minLength} символов, вы ввели символов: {currentLength}',
  },
};
