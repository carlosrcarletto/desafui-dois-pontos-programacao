import { fazerLogin } from "../src/autenticacaoDoUsuario.js";
import assert from "node:assert";
import { describe, it } from "node:test";

describe("Teste do Login", function () {
  it("Validar que o login com email e senha correto e expirado false esta logando com sucesso", function () {
    // Act
    const retornoDaFuncao = fazerLogin("carlos@carlos.com.br", 111111);

    // Assert
    assert.equal(retornoDaFuncao, "Login realizado com sucesso");
  });
  it("Validar que o login com email incorreto e senha e expirado false esta retornando a mensagem usuario nao encontrado", function () {
    // Act
    const retornoDaFuncao = fazerLogin("carlos@carlosss.com.br", 111111);

    // Assert
    assert.equal(retornoDaFuncao, "Usuário não encontrado");
  });
  it("Validar que a credencial esta expirado", function () {
    // Act
    const retornoDaFuncao = fazerLogin("arthur@arthur.com.br", 333333);

    // Assert
    assert.equal(
      retornoDaFuncao,
      "Credencial Expirada renove suas credenciais"
    );
  });
  it("Validar que o usuario foi encontrado e a senha esta incorreta", function () {
    // Act
    const retornoDaFuncao = fazerLogin("mateus@mateus.com.br", 444445);

    // Assert
    assert.equal(retornoDaFuncao, "Senha incorreta");
  });
});
