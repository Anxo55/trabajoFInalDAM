export default function Form() {

return (
<div className="items-center justify-center bg-yellow-200">
    <form className="items-center justify-center bg-yellow-200">    
        <label htmlFor="email">Correco Electronico</label>
        <input type="email" name="email" id="email" />
        <br />
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password"/>
    </form>
</div>
)
}