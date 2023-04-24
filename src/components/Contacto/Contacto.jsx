import React from 'react'
import Navbar from '../Navbar/Navbar'
import ItemListConteiner from '../ItemListConteiner'

const Contacto = () => {
  return (
    <>
    <Navbar/>
    <ItemListConteiner saludo="CONTACTO Y OPINIONES"/>
    <div className='contacto'>
        <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-4">
                <label for="validationCustom01" class="form-label">First name</label>
                <input type="text" class="form-control" id="validationCustom01" value="Mark" required/>
                <div class="valid-feedback">
                Looks good!
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationCustom02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="validationCustom02" value="Otto" required/>
                <div class="valid-feedback">
                Looks good!
                </div>
            </div>
           
            <div class="col-md-6">
                <label for="validationCustom03" class="form-label">City</label>
                <input type="text" class="form-control" id="validationCustom03" required/>
                <div class="invalid-feedback">
                Please provide a valid city.
                </div>
            </div>           
            
            <div class="col-12">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                <label class="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                    You must agree before submitting.
                </div>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Contacto