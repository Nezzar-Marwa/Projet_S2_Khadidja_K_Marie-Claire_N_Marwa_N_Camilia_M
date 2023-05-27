<script setup lang="ts">
import FacebookIcon from '@/components/icons/IconFacebook.vue'
import TwitterIcon from '@/components/icons/IconTwitter.vue'
import InstagramIcon from '@/components/icons/IconInstagram.vue'

</script>

<template>
  <footer class="space-y-6 bg-contrastcolor py-16 px-6 text-backgroundcolor">

    <div>
      <h4>Nous</h4>
      <address>
        <a href="tel:0384542727">03 84 54 27 27</a><br />
        <a href="mailto:Foksers@contact.fr">foksers@contact.fr</a>
      </address>
    </div>

    <nav>
      <h4>Liens utiles</h4>
      <ul>
        <li><a href="#">Mentions légales</a></li>
        <li><a href="#">Donations</a></li>
        <li><a href="#">Newsletter</a></li>
      </ul>
    </nav>



    <div></div>

    <div>
      <h4>Nous suivre</h4>
      <ul>
        <li>
          <a href="https://facebook.com" aria-label="facebook"><FacebookIcon /> </a>
        </li>
        <li>
          <a href="https://instagram.com" aria-label="instagram"><InstagramIcon /> </a>
        </li>
        <li>
          <a href="https://twitter.com" aria-label="twitter"><TwitterIcon /> </a>
        </li>
      </ul>
    </div>
    <section>
      <form action="#">
      <div>
        <label for="Prénom*">Prénom<span class="text-toniccolor">*</span> </label>
        <input class="flex rounded-lg text-text border mb-4 px-5  border-toniccolor focus:outline-none focus:ring-1 focus:ring-toniccolor " type="text" name="Prénom" id="Prénom">
      </div>
      <div>
        <label for="Nom*">Nom<span class="text-toniccolor">*</span></label>
        <input class="flex rounded-lg text-text border mb-4 px-5  border-toniccolor focus:outline-none focus:ring-1 focus:ring-toniccolor " type="text" name="Nom" id="Nom">
      </div>
      <div>
        <label for="Mail*">Mail<span class="text-toniccolor">*</span></label>
        <input class="flex rounded-lg text-text border mb-4 px-5  border-toniccolor  invalid:border-invalid invalid:text-invalid focus:outline-none focus:ring-1 focus:ring-toniccolor focus:invalid:border-invalid focus:invalid:ring-invalid" type="email" placeholder="VotreEmail@gmail.com" name="Mail">
      </div>
      <div>
        <label for="Téléphone*">Téléphone<span class="text-toniccolor">*</span></label>
        <input class="flex rounded-lg border mb-4 px-5 border-toniccolor" type="text" name="Téléphone">
      </div>
      <div>
        <label for="message*">Message<span class="text-toniccolor">*</span></label>
        <textarea class="flex rounded-lg text-text border mb-4 px-8  border-toniccolor focus:outline-none focus:ring-1 focus:ring-toniccolor "  id="msg" name="message" rows="5"></textarea>
      </div>
      <div>
      <button class="rounded-full border border-toniccolor px-10 py-3 font-bold text-backgroundcolor hover:bg-toniccolor"  type="submit">Envoyer</button>
    </div>
    </form>
    </section>
  </footer>
</template>