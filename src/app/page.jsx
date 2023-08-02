import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section>
      <div className='relative h-screen w-full'>
        <Image
          src={'/images/baner4.jpg'}
          className='absolute object-cover'
          fill
          alt='banner'
        />
      </div>
      <div className='absolute left-0 top-0 z-20 h-full w-full bg-slate-800/40'></div>

      <div className='container mx-auto'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          delectus obcaecati ducimus autem quo qui architecto porro accusamus
          impedit quibusdam eaque odit quis laboriosam veritatis iure animi
          explicabo dignissimos, pariatur ipsa voluptates hic quisquam,
          voluptate at nobis. Eos aspernatur accusantium beatae, atque neque
          fugit expedita tenetur error qui odit quia maiores doloremque
          accusamus quasi, quaerat veritatis quibusdam eum facere sapiente sequi
          repellendus dolorum? Expedita at iure debitis consectetur magnam
          perspiciatis quasi doloribus non architecto excepturi dolorum laborum,
          asperiores veritatis dolores est minima deleniti nobis velit numquam!
          Adipisci, unde doloribus nisi ea pariatur minima odio ducimus error
          nesciunt, rem quidem! Similique illum blanditiis sunt hic et rerum
          doloribus sint in aut. Ratione maxime suscipit vero laudantium soluta
          eligendi, quidem praesentium, veritatis, at deleniti distinctio ea
          harum! Magni, rerum! Assumenda recusandae quos illo ipsa repellat
          provident, non sequi ipsum impedit dolorum maiores aliquam optio
          facere soluta animi eligendi voluptatum. Eum nostrum impedit, minus
          fuga fugit eos corporis quo provident sapiente! Repellendus error
          atque earum quidem debitis facilis dolor delectus, exercitationem
          quae, hic consequuntur esse, explicabo maiores numquam blanditiis
          praesentium optio corporis sed voluptatibus. Ipsa, delectus ad quasi
          non sint ex id fugiat quisquam quod voluptates porro repellat quam ab
          sapiente, in dolores! Quod facilis a provident eaque minus beatae
          laudantium placeat odio iste harum, sint, repellendus aliquid
          quibusdam! Sint eum atque repellendus alias, aliquam numquam.
          Dignissimos libero quisquam, adipisci fuga natus, praesentium veniam
          dolore blanditiis nobis tempore nesciunt nam placeat officia omnis
          voluptatibus tenetur, quod assumenda. Magnam minima blanditiis eius
          reiciendis obcaecati sequi laudantium pariatur expedita fugiat libero
          ullam vitae, recusandae aperiam corporis atque. Repellat inventore
          corporis et quasi ad similique, rerum dolore aliquam unde assumenda
          facilis consectetur, mollitia nemo neque obcaecati. Est praesentium
          delectus repellendus reiciendis, eveniet ab voluptatibus quas
          veritatis, inventore voluptas, animi facere doloremque facilis vitae
          asperiores? Fugit, tenetur.
        </p>
      </div>
    </section>
  )
}

export default page
