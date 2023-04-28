import React from 'react'

export const ComponenteMobiliario = () => {
  return (
    <div className='multiplebox'>
    <div class="multibox">
      <p>Mesas</p>
      <input type="number" id="mob_mesas" min="0" max="10" className='inputnumber'></input>
    </div>

    <div class="multibox">
      <p>Sillas</p>
      <input type="number" id="mob_sillas" min="0" max="10" className='inputnumber'></input>
    </div>

    <div class="multibox">
      <p>Podium</p>
      <input type="number" id="mob_podium" min="0" max="10" className='inputnumber'></input>
    </div>

    <div class="multibox">
      <p>Mesa para laptop</p>
      <input type="number" id="mob_mesa_laptop" min="0" max="10" className='inputnumber'></input>
    </div>

    <div class="multibox">
      <p>Lamparas</p>
      <input type="number" id="mob_lamparas" min="0" max="10" className='inputnumber'></input>
    </div>
  </div>
  )
}
