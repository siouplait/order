import React from 'react'
// module
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'
// css
import './stories.css'
import '../src/index.css'
import '../src/class-generic.css'
// components
import Button from '../src/components-modules/Button'
import Input from '../src/components-modules/Input'
import Link from '../src/components-modules/Link'
import Nav from '../src/components-modules/Nav'
import PageTemplate from '../src/components-modules/PageTemplate'
import Itemblock from '../src/components-modules/Itemblock'
import Itemspots from '../src/components-modules/Itemspots'
import Headertext from '../src/components-modules/Headertext'
import SlideMenu from '../src/components-slide/SlideMenu'
import SlideItem from '../src/components-slide/SlideItem'
import SpotCategory from '../src/components-modules/SpotCategory'
import ListOrder from '../src/components-modules/ListOrder'
import TotalOrder from '../src/components-modules/TotalOrder'
import Tip from '../src/components-modules/Tip'
// icon/logo
import btnBurger from '../src/icon/btn_burger.svg'
import btnBack from '../src/icon/btn_back.svg'
import btnSearch from '../src/icon/btn_search.svg'
import btnAdding from '../src/icon/btn_adding.svg'
import btnRemove from '../src/icon/btn_remove.svg'
import logoMain from '../src/icon/logo_main2.png'
import logoQr from '../src/icon/logo_qr.png'
import logoNfcn from '../src/icon/logo_nfcn.png'
import logoHeart from '../src/icon/logo_heart.svg'
import logoTitle from '../src/icon/logo_title.png'
import logoChiken from '../src/img/LogoPoulet.png'
import imgSpot from '../src/img/imgSpot.png'
// welcome
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)
// BUTTON stories
storiesOf('Button', module)
  .add('Btn principal', () =>
    <Button text="Hello button" />)

  .add('Btn facebook', () =>
    <Button text="Facebook Connect" className="s-facebook" />)

  .add('Btn black', () =>
    <Button text="PASSER COMMANDE" className="s-black" />)

  .add('Btn burger', () =>
    <Button icon={btnBurger} iconHeight="3em" />)

  .add('Btn back', () =>
    <Button icon={btnBack} iconHeight="2.5em" />)

  .add('Btn black share', () =>
    <Button
      text="PARTAGER"
      icon={btnBack}
      iconHeight = "2.5em"
      classIcon="s-icon-symetric"
      className="s-black"
    />)

  .add('Btn with icon', () =>
    <Button
      text="RECHERCHE"
      icon={btnSearch}
      iconHeight="2.5em"
      className="s-black"
    />)

  .add('Btn search', () =>
    <Button icon={btnSearch} iconHeight="2em" />)

  .add('Btn adding', () =>
    <Button icon={btnAdding} iconHeight="3em"/>)

  .add('Btn remove', () =>
    <Button icon={btnRemove} iconHeight="3em" />)

  .add('Btn and logo', () =>
    <Button text="salut" logo={logoMain} logoHeight="9em" />)

// INPUT stories
storiesOf('Input', module)
  .add('Input standard', () =>
    <Input placeholder="Standard input" />)

  .add('Input search', () =>
    <Input
      icon={btnSearch}
      width="20em"
      iconHeight="1.3em"
      placeholder="Search"
    />)

// LINK stories
storiesOf('Link', module)
  .add('link highlighted', () =>
    <Link>Commander sans <br/> compte</Link>)

  .add('link highlighted with icon', () =>
    <Link text="MES SPOTS" logo={logoHeart} imgHeight="1.3em"/>)

  .add('link highlighted with white block', () =>
    <Link text="Commander sans compte" block logo={btnSearch} imgHeight="1.5em" />)

// NAVBAR stories
storiesOf('Nav', module)
  .add('Nav menu without btn back and title', () =>
    <Nav className="s-nav-menu s-nav-noback s-no-title" />)

  .add('Nav menu without btn back', () =>
    <Nav className="s-nav-menu s-nav-noback"/>)

  .add('Nav menu with btn back', () =>
    <Nav className="s-nav-menu" />)

// PAGE stories
storiesOf('Page', module)
  .add('Page 1', () =>
    <PageTemplate center className="s-bg-orange">
      <img
        className="s-mb-15"
        src={logoMain}
        alt="button burger"
        style={{ height: '15em' }}
      />
      <Button text="PASSER COMMANDE" position="s-mb-4" className="s-black" />
    </PageTemplate>
  )
  .add('Page 2', () =>
    <PageTemplate className="s-bg-orange">
      <div className="s-mt-12">
        <img
          src={logoMain}
          alt="logo principal"
          style={{ height: '10em' }}
        />
        <div className="s-block-landscape s-mt-4">
          <Button text="Facebook Connect" className="s-facebook" />
          <Button text="S'inscrire" position="s-mt-3" />
        </div>
      </div>
      <Link className="s-fixed-b s-mb-3">
        Commander sans<br/> compte
      </Link>
    </PageTemplate>
  )
  .add('Page 3', () =>
    <PageTemplate nav="s-nav-noback s-no-title" center className="s-bg-orange">
      <img
        className="s-fixed-t s-mt-2"
        src={logoMain}
        alt="logo"
        style={{ height: "7em" }}
      />
      <div className="s-block-landscape s-mb-4" >
        <Button position="s-mt-3" text="Scanner le QR Code" logo={logoQr} logoHeight="5em" />
        <Button position="s-mt-3" text="Androïd : NFC" logo={logoNfcn} logoHeight="5em" />
      </div>
      <Link block className="s-fixed-b" text="Commander sans compte" logo={btnSearch} imgHeight="2em" />
    </PageTemplate>
  )

  .add('Page 4', () =>
    <PageTemplate nav="s-nav-noback" center className="s-bg-orange">
      <div className="s-mb-16">
        <img
          className="s-mt-"
          src={logoNfcn}
          alt="logo QR"
          style={{ height: "5em" }}
        />
        <p className="s-px-2">
          Posez votre <span className="s-text-bold">téléphone</span> sur les <span className="s-text-bold">jolis ronds connectés</span>,
        et découvrez directement le <span className="s-text-bold">menu du spot où vous êtes</span>
        </p>
        <img
          className="s-landscape-hidden"
          src={logoMain}
          alt="logo"
          style={{ height: "4em" }}
        />
      </div>
      <Button className="s-fixed-b s-mb-5" icon={btnBack} iconHeight="4em" />
    </PageTemplate>
  )

  .add('Page spots search', () =>
    <PageTemplate nav className="s-bg-white">

      <div full className="s-mt-2">
        <Input
          className="s-mt-1"
          icon={btnSearch}
          width="17em"
          iconHeight="1.3em"
          placeholder="Search"
        />
        <Link className="s-mt-1" text="MES SPOTS" logo={logoHeart} imgHeight="1.3em" />
      </div>

      <div full className="s-d-flex s-mt-3 s-pb-10">
        <Itemspots src={imgSpot}/>
        <Itemspots src={imgSpot} />
        <Itemspots src={imgSpot} />
        <Itemspots src={imgSpot} />
        <Itemspots src={imgSpot} />
      </div>
    </PageTemplate>
  )

  .add('Page select Menu', () =>
    <PageTemplate nav className="s-bg-white">
      <div full className="s-d-flex1">
        <Headertext title="NOM DU SITE" subtitle="CATEGORY NAME" />
        <Input
          icon={btnSearch}
          width="17em"
          iconHeight="1.3em"
          placeholder="Search"
        />
      </div>

      <div full className="s-d-flex">
        <Itemblock src={logoChiken}>
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src={logoChiken}>
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src={logoChiken}>
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src={logoChiken}>
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src={logoChiken}>
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src={logoChiken}>
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src={logoChiken}>
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src={logoChiken}>
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src={logoChiken}>
          Name item Name item Name item PRIX
        </Itemblock>
      </div>
    </PageTemplate>
  )

  .add('Logout Page', () =>
    <PageTemplate center className="s-bg-orange">
      <div className="s-fixed-t">
        <h1 className=""> #EtMerci! </h1>
        <p className=""> Le "Name of the place" prépare votre commande.
        <br />Vous recevrez une notification quand celle-ci sera prête.
      </p>
      </div>
      <img className="s-mt-20" src={logoMain} alt="logo main" style={{ height: "25vh" }} />
      <Button
        position="s-mt-5"
        text="PARTAGER"
        icon={btnBack}
        iconHeight="2.5em"
        classIcon="s-icon-symetric"
        className="s-black"
      />
      <img className="s-landscape-hidden s-mt-5" style={{ transform: 'rotate(-11deg)' }} src={logoTitle} alt="logo title" />
      <p className="s-mt-4"> MAIS C'EST NOUS QUI VOUS REMERCIONS </p>
    </PageTemplate>
  )

  .add('blue slide', () =>
    <SlideMenu />
  )

  .add('item slide', () =>
    <SlideItem dataItem="Name item" price="10.00 euros" src={logoChiken}/>
  )

  .add('Page 7 spot category', () =>
    <PageTemplate nav className="s-bg-white">
      <div full className="s-d-flex1">
        <Headertext title="NOM DU SITE" subtitle="ADDRESS & OPENING HOURS" />
        <Input
          className="s-mt-1"
          icon={btnSearch}
          width="17em"
          iconHeight="1.3em"
          placeholder="Search"
        />
      </div>

      <div full className="s-d-flex">
        <SpotCategory
          items={['PETIT DEJ', 'APERO', 'BOISSONS']}
          src={['../src/img/petitdej.png', '../src/img/apero.png', '../src/img/boisson.png']}
        />
      </div>
    </PageTemplate>
  )

  .add('Page commande', () =>
    <PageTemplate nav className="s-bg-white">
      <div full className="s-d-flex1">
        <Headertext title="VOTRE COMMANDE" subtitle="JJ.MM.AA  HH:MM" />
      </div>

      <div center>
        <ListOrder
        list={[
          {qte: 2, name: 'Burger', price: 8.10, id: 1},
          {qte: 1, name: 'coca', price: 1.50, id: 12},
          {qte: 1, name: 'Salade', price: 4.40, id: 100},
          {qte: 2, name: 'Mousse au chocolat', price: 7.40, id: 8}
        ]} />
        <TotalOrder list={[
          { qte: 2, name: 'Burger', price: 8.10, id: 1 },
          { qte: 1, name: 'coca', price: 1.50, id: 12 },
          { qte: 1, name: 'Salade', price: 4.40, id: 100 },
          { qte: 2, name: 'Mousse au chocolat', price: 7.40, id: 8 }
        ]} />
        <Tip />
        <div className="s-pb-7">
          <Button text="PAYER" className="s-black" />
        </div>
      </div>
    </PageTemplate>
  )

export default Button
