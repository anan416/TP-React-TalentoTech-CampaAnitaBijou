export const Form = () => {
    return(
        <section>
            <form action="https://formspree.io/f/meepzkgk" method="POST" className="letras">
                <label>Mail: <input type="email" name="mail"/></label>
                <label>Nombre: <input type="text" name="nombre"/></label>
                <label>Mensaje: <textarea name="mensaje"></textarea></label>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};