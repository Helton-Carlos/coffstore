<template>
  <div  style="margin:50px 20px">
    <div class="flex-container">
      <form name="meu_form" class="flex-coluna" style="width:350px">
        <h1>Entre em contato</h1>

        <label for="nome">Nome</label>
        <input
          type="text"
          id="nomeid"
          placeholder="Helton Brito"
          required="required"
          name="nome"
        />

        <label for="fone">Fone</label>
        <input
          type="tel"
          id="foneid"
          placeholder="(xx)xx-xx-xx-xx"
          name="fone"
        />

        <label for="email">Email</label>
        <input
          type="email"
          id="emailid"
          placeholder="fulano@mail.com"
          name="email"
        />

        <label for="email">Assunto:</label>
        <textarea placeholder="Deixe sua opnião"></textarea>

        <input
          type="submit"
          class="enviar"
          onclick="Enviar();"
          value="Enviar"
        />
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.129162838254!2d-46.61245068554102!3d-23.635544970219957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b402d270a43%3A0x906534b3b92c070e!2sR.%20Lorenzo%20da%20Viterbo%2C%20370%20-%20Jardim%20Botucatu%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004170-050!5e0!3m2!1spt-BR!2sbr!4v1645296375960!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
input,
textarea {
  padding: 10px;
  border: 0.5px solid #9b9b9b;
  border-radius: 15px;
  margin-bottom: 10px;
}
input[type="submit"] {
  background: #880202;
  color: #fff;
}
input[type="submit"]:hover {
  background: #250303;
  color: #fff;
}
</style>
