import logo from "../assets/icon_pec.svg"

export function Logo() {
    return (
        <div className="grid justify-items-center items-center text-pec font-semibold">
            <div className="flex items-center gap-2">
                <img src={logo} alt="PEC" />
                <h1 className='text-xl'>PEC</h1>
            </div>
            <p className='text-sm'>ProEngControl</p>
        </div>
    )
}