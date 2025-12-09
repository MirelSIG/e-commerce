export const registroTemplate = {

    init(obj){
        return `
           <section class="registro-section">
        <h2>Crear cuenta</h2>

        <form id="form-registro" novalidate>
          <div class="form-row">
            <label for="nombre">Nombre</label>
            <input id="nombre" name="nombre" type="text" required />
            <small class="error" data-for="nombre"></small>
          </div>

          <div class="form-row">
            <label for="apellido">Apellido</label>
            <input id="apellido" name="apellido" type="text" required />
            <small class="error" data-for="apellido"></small>
          </div>

          <div class="form-row">
            <label for="email">Correo electrónico</label>
            <input id="email" name="email" type="email" required />
            <small class="error" data-for="email"></small>
          </div>

          <div class="form-row">
            <label for="password">Contraseña</label>
            <input id="password" name="password" type="password" required minlength="8" />
            <small class="error" data-for="password"></small>
          </div>

          <div class="form-row">
            <label for="confirm-password">Confirmar contraseña</label>
            <input id="confirm-password" name="confirm-password" type="password" required />
            <small class="error" data-for="confirm-password"></small>
          </div>

          <div class="form-row checkbox-row">
            <input id="terms" name="terms" type="checkbox" />
            <label for="terms">Acepto los <a href="/pages/terminos.html" target="_blank">Términos y Condiciones</a></label>
            <small class="error" data-for="terms"></small>
          </div>

          <div class="form-row">
            <button id="btn-registrar" type="submit">Crear cuenta</button>
          </div>

          <div class="form-row">
            <p>¿Ya tienes cuenta? <a href="/pages/login.html" id="link-login">Iniciar sesión</a></p>
          </div>

          <div id="registro-feedback" aria-live="polite"></div>
        </form>
      </section>
        `
    }
    
}