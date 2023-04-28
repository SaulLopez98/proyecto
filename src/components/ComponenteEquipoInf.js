import React from 'react'

export const ComponenteEquipoInf = () => {
  return (
    <div className='multiplebox'>
    <div class="multibox">
      <p>Bocina</p>
      <input type="number" id="eq_bocina" min="0" max="10" className='inputnumber'></input>
    </div>

    <div class="multibox">
      <p>Microfono</p>
      <input type="number" id="eq_microfono" min="0" max="10" className='inputnumber'></input>
    </div>

    <div class="multibox">
      <p>Proyector</p>
      <input type="number" id="eq_proyector" min="0" max="10" className='inputnumber'></input>
    </div>

    <div class="multibox">
      <p>Laptop</p>
      <input type="number" id="eq_laptop" min="0" max="10" className='inputnumber'></input>
    </div>

    <div class="multibox">
      <p>Apuntador</p>
      <input type="number" id="eq_apuntador" min="0" max="10" className='inputnumber'></input>
    </div>
  </div>
  )
}
