# Estudo de caso de autenticação com o framework `NestJS` e a biblioteca `Passport`

- Tem como objetivo entender o funcionamento do framework `NestJS`, e da biblioteca `passport`.

- Ao acessar o endpoint `/sign-in` fornecendo o username `roberto_salvador@gmail.com`, seguido da senha `123456`, o endpoint deve retornar um token de acesso que expira em `60s`.

- Ao acessar o endpoint `/sign-in` fornecendo o `username` ou `password` inválido, um `internal server error` será lançado, pois esta parte não foi tratada.

- Ao acessar o endpoint `/profile` fornecendo um token válido no cabeçalho `HTTP`, as informações sobre esse usuário devem ser retornadas.
