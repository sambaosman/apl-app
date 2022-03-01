import React from "react";
import { register } from "../LoginRegistration/LoginRegistrationFunctions";

const Waiver = ({
  formFields,
  setFormFields,
  setTeamMembers,
  setError,
  history,
}) => {
  return (
    <div>
      waiver
      <small>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor
        pretium viverra. In pellentesque massa placerat duis. At elementum eu
        facilisis sed odio morbi quis. Arcu dui vivamus arcu felis. Pellentesque
        nec nam aliquam sem et tortor. Morbi leo urna molestie at elementum eu
        facilisis sed. In aliquam sem fringilla ut morbi. A arcu cursus vitae
        congue mauris rhoncus aenean vel elit. Libero enim sed faucibus turpis.
        Tortor consequat id porta nibh. Sit amet dictum sit amet justo. Neque
        volutpat ac tincidunt vitae semper quis lectus. At erat pellentesque
        adipiscing commodo elit at imperdiet. Mattis aliquam faucibus purus in.
        Bibendum neque egestas congue quisque egestas. Arcu non odio euismod
        lacinia at. Pellentesque id nibh tortor id aliquet lectus. Enim diam
        vulputate ut pharetra sit. Convallis posuere morbi leo urna molestie at.
        Ornare lectus sit amet est placerat in egestas. Massa vitae tortor
        condimentum lacinia quis vel eros donec. Potenti nullam ac tortor vitae
        purus faucibus ornare. Ultrices dui sapien eget mi proin sed libero
        enim. Magna etiam tempor orci eu lobortis elementum nibh. Cursus eget
        nunc scelerisque viverra. Massa eget egestas purus viverra accumsan in
        nisl nisi scelerisque. Tincidunt augue interdum velit euismod in.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames. Risus nullam eget felis eget nunc lobortis. Malesuada fames ac
        turpis egestas sed. Aliquam nulla facilisi cras fermentum odio. Enim ut
        sem viverra aliquet eget sit amet. Et netus et malesuada fames ac. Arcu
        risus quis varius quam quisque id. Faucibus interdum posuere lorem ipsum
        dolor sit. Id leo in vitae turpis massa sed elementum. Dolor sit amet
        consectetur adipiscing. Non nisi est sit amet facilisis magna. Posuere
        lorem ipsum dolor sit amet consectetur. Hendrerit dolor magna eget est
        lorem ipsum. Aenean vel elit scelerisque mauris. Non enim praesent
        elementum facilisis leo. Adipiscing at in tellus integer feugiat
        scelerisque varius morbi enim. Non blandit massa enim nec dui nunc
        mattis enim. Interdum varius sit amet mattis vulputate enim. Gravida
        rutrum quisque non tellus orci ac auctor augue. Sit amet nulla facilisi
        morbi tempus iaculis urna id. In massa tempor nec feugiat. Est
        pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Auctor
        urna nunc id cursus metus. Diam phasellus vestibulum lorem sed.
        Venenatis cras sed felis eget. Amet consectetur adipiscing elit duis
        tristique sollicitudin. Fames ac turpis egestas sed tempus urna et.
        Vitae congue eu consequat ac felis donec et. Ac ut consequat semper
        viverra nam. Commodo ullamcorper a lacus vestibulum sed arcu. Et leo
        duis ut diam quam nulla porttitor massa. Sit amet porttitor eget dolor.
        Viverra maecenas accumsan lacus vel facilisis volutpat. At risus viverra
        adipiscing at in tellus integer feugiat scelerisque. Ac turpis egestas
        integer eget aliquet nibh praesent tristique magna. Risus pretium quam
        vulputate dignissim. Duis tristique sollicitudin nibh sit amet. In hac
        habitasse platea dictumst vestibulum rhoncus est pellentesque. Ultricies
        mi eget mauris pharetra et. Purus faucibus ornare suspendisse sed nisi
        lacus sed. Elit duis tristique sollicitudin nibh sit amet. Molestie nunc
        non blandit massa enim nec dui nunc. Neque volutpat ac tincidunt vitae
        semper quis lectus nulla at. Dui id ornare arcu odio ut sem nulla
        pharetra diam. Suscipit tellus mauris a diam maecenas sed enim ut. Eu
        scelerisque felis imperdiet proin fermentum leo vel orci porta. Sit amet
        aliquam id diam. Eu lobortis elementum nibh tellus molestie nunc non
        blandit massa. Metus dictum at tempor commodo ullamcorper a. Sit amet
        consectetur adipiscing elit ut aliquam. Elementum facilisis leo vel
        fringilla est ullamcorper eget. Neque egestas congue quisque egestas
        diam in arcu. Porta nibh venenatis cras sed felis eget. Cursus vitae
        congue mauris rhoncus aenean vel elit scelerisque.
      </small>
      <button
        onClick={() =>
          register(formFields, setFormFields, setTeamMembers, setError, history)
        }
      >
        Acknowledge
      </button>
    </div>
  );
};

export default Waiver;
