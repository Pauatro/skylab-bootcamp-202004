const {useState, useEffect} = React

function Search({onAdvancedSearch, searchConditions}){ 

  const clearForm = () => {
    event.preventDefault()

    const {cardname, text, types, W, U, B, R, G, C, color_comparison, manacost, stat_1, stat_1_mode, statnumber, legality, formats, sets, blocks, mythicrare, rare, uncommon, common, artist, flavortext, lore, languages, order} = document.querySelector(".advancedsearch__form")

    cardname.value = ""
    text.value = ""
    types.value = ""
    W.checked = false
    U.checked = false
    B.checked = false
    R.checked = false
    G.checked = false
    C.checked = false
    color_comparison.value = "="
    manacost.value = ""
    stat_1.value = "cmc"
    stat_1_mode.value = "="
    statnumber.value = ""
    legality.value = "f"
    formats.value = ""
    sets.value = ""
    blocks.value = ""
    mythicrare.checked = false
    rare.checked = false
    uncommon.checked = false
    common.checked = false
    artist.value = ""
    flavortext.value = ""
    lore.value = ""
    languages.value = ""
    order.value = "name"
  }

  const changeManacost = (event) => {
    document.querySelector("#manacost").value += event.target.value

    document.querySelector("#manasymbols").value = true
  }

  const changeText = (event) => {
    document.querySelector("#text").value += event.target.value

    document.querySelector("#textsymbols").value = true
  }

  return <section className="advancedsearch">
    <form className = "advancedsearch__form" onSubmit = {()=>{event.preventDefault(); onAdvancedSearch(event)}}>
      <div className="advancedsearch__section">
        <a className="advancedsearch__section--title">Card Name</a>
        <div className="advancedsearch__section--options">
          <input
            type="text"
            name="cardname"
            placeholder=" Any words in the name, e.g. 'Sky'"
            defaultValue = {searchConditions && searchConditions.name?searchConditions.name:""}
          />
          <p>
            Enter text that should appear in the card name. Word order doesn't
            matter.
          </p>
        </div>
      </div>
      <div className="advancedsearch__section">
        <a className="advancedsearch__section--title">Card Text</a>
        <div className="advancedsearch__section--options">
          <input
            type="text"
            name="text"
            id = "text"
            placeholder=" Any words in the name, e.g. 'Lab'"
            defaultValue = {searchConditions && searchConditions.text?searchConditions.text:""}

          />
          <select id="textsymbols" onChange = {()=>{event.preventDefault(); changeText(event)}}>
            <option value = "">Add symbol</option>
            <option value="{T}">
              {"{"}T{"}"} – tap this permanent
            </option>
            <option value="{Q}">
              {"{"}Q{"}"} – untap this permanent
            </option>
            <option value="{E}">
              {"{"}E{"}"} – an energy counter
            </option>
            <option value="{PW}">
              {"{"}PW{"}"} – planeswalker
            </option>
            <option value="{CHAOS}">
              {"{"}CHAOS{"}"} – chaos
            </option>
            <option value="{W}">
              {"{"}W{"}"} – one white mana
            </option>
            <option value="{U}">
              {"{"}U{"}"} – one blue mana
            </option>
            <option value="{B}">
              {"{"}B{"}"} – one black mana
            </option>
            <option value="{R}">
              {"{"}R{"}"} – one red mana
            </option>
            <option value="{G}">
              {"{"}G{"}"} – one green mana
            </option>
            <option value="{C}">
              {"{"}C{"}"} – one colorless mana
            </option>
            <option value="{X}">
              {"{"}X{"}"} – X generic mana
            </option>
            <option value="{0}">
              {"{"}0{"}"} – zero mana
            </option>
            <option value="{1}">
              {"{"}1{"}"} – one generic mana
            </option>
            <option value="{2}">
              {"{"}2{"}"} – two generic mana
            </option>
            <option value="{3}">
              {"{"}3{"}"} – three generic mana
            </option>
            <option value="{4}">
              {"{"}4{"}"} – four generic mana
            </option>
            <option value="{5}">
              {"{"}5{"}"} – five generic mana
            </option>
            <option value="{6}">
              {"{"}6{"}"} – six generic mana
            </option>
            <option value="{7}">
              {"{"}7{"}"} – seven generic mana
            </option>
            <option value="{8}">
              {"{"}8{"}"} – eight generic mana
            </option>
            <option value="{9}">
              {"{"}9{"}"} – nine generic mana
            </option>
            <option value="{10}">
              {"{"}10{"}"} – ten generic mana
            </option>
            <option value="{11}">
              {"{"}11{"}"} – eleven generic mana
            </option>
            <option value="{12}">
              {"{"}12{"}"} – twelve generic mana
            </option>
            <option value="{13}">
              {"{"}13{"}"} – thirteen generic mana
            </option>
            <option value="{15}">
              {"{"}15{"}"} – fifteen generic mana
            </option>
            <option value="{16}">
              {"{"}16{"}"} – sixteen generic mana
            </option>
            <option value="{W/U}">
              {"{"}W/U{"}"} – one white or blue mana
            </option>
            <option value="{W/B}">
              {"{"}W/B{"}"} – one white or black mana
            </option>
            <option value="{B/R}">
              {"{"}B/R{"}"} – one black or red mana
            </option>
            <option value="{B/G}">
              {"{"}B/G{"}"} – one black or green mana
            </option>
            <option value="{U/B}">
              {"{"}U/B{"}"} – one blue or black mana
            </option>
            <option value="{U/R}">
              {"{"}U/R{"}"} – one blue or red mana
            </option>
            <option value="{R/G}">
              {"{"}R/G{"}"} – one red or green mana
            </option>
            <option value="{R/W}">
              {"{"}R/W{"}"} – one red or white mana
            </option>
            <option value="{G/W}">
              {"{"}G/W{"}"} – one green or white mana
            </option>
            <option value="{G/U}">
              {"{"}G/U{"}"} – one green or blue mana
            </option>
            <option value="{2/W}">
              {"{"}2/W{"}"} – two generic mana or one white mana
            </option>
            <option value="{2/U}">
              {"{"}2/U{"}"} – two generic mana or one blue mana
            </option>
            <option value="{2/B}">
              {"{"}2/B{"}"} – two generic mana or one black mana
            </option>
            <option value="{2/R}">
              {"{"}2/R{"}"} – two generic mana or one red mana
            </option>
            <option value="{2/G}">
              {"{"}2/G{"}"} – two generic mana or one green mana
            </option>
            <option value="{W/P}">
              {"{"}W/P{"}"} – one white mana or two life
            </option>
            <option value="{U/P}">
              {"{"}U/P{"}"} – one blue mana or two life
            </option>
            <option value="{B/P}">
              {"{"}B/P{"}"} – one black mana or two life
            </option>
            <option value="{R/P}">
              {"{"}R/P{"}"} – one red mana or two life
            </option>
            <option value="{G/P}">
              {"{"}G/P{"}"} – one green mana or two life
            </option>
            <option value="{S}">
              {"{"}S{"}"} – one snow mana
            </option>
          </select>
          <p>
            Enter text that should appear in the rules box. Word order doesn't
            matter.
          </p>
        </div>
      </div>
      <div className="advancedsearch__section">
        <a className="advancedsearch__section--title">Type Line</a>
        <div className="advancedsearch__section--options">
          <select 
          id="types" 
          defaultValue = {searchConditions && searchConditions.type?searchConditions.type:""}
          >
            <option value = "">Type</option>
            <optgroup label="Types">
              <option data-pol="+" data-item="artifact" value="artifact">
                Artifact
              </option>
              <option data-pol="+" data-item="conspiracy" value="conspiracy">
                Conspiracy
              </option>
              <option data-pol="+" data-item="creature" value="creature">
                Creature
              </option>
              <option data-pol="+" data-item="emblem" value="emblem">
                Emblem
              </option>
              <option data-pol="+" data-item="enchantment" value="enchantment">
                Enchantment
              </option>
              <option data-pol="+" data-item="hero" value="hero">
                Hero
              </option>
              <option data-pol="+" data-item="instant" value="instant">
                Instant
              </option>
              <option data-pol="+" data-item="land" value="land">
                Land
              </option>
              <option data-pol="+" data-item="phenomenon" value="phenomenon">
                Phenomenon
              </option>
              <option data-pol="+" data-item="plane" value="plane">
                Plane
              </option>
              <option data-pol="+" data-item="planeswalker" value="planeswalker">
                Planeswalker
              </option>
              <option data-pol="+" data-item="scheme" value="scheme">
                Scheme
              </option>
              <option data-pol="+" data-item="sorcery" value="sorcery">
                Sorcery
              </option>
              <option data-pol="+" data-item="tribal" value="tribal">
                Tribal
              </option>
              <option data-pol="+" data-item="vanguard" value="vanguard">
                Vanguard
              </option>
            </optgroup>
            <optgroup label="Supertypes">
              <option data-pol="+" data-item="basic" value="basic">
                Basic
              </option>
              <option data-pol="+" data-item="elite" value="elite">
                Elite
              </option>
              <option data-pol="+" data-item="legendary" value="legendary">
                Legendary
              </option>
              <option data-pol="+" data-item="ongoing" value="ongoing">
                Ongoing
              </option>
              <option data-pol="+" data-item="snow" value="snow">
                Snow
              </option>
              <option data-pol="+" data-item="token" value="token">
                Token
              </option>
              <option data-pol="+" data-item="world" value="world">
                World
              </option>
            </optgroup>
            <optgroup label="Artifact Types">
              <option data-pol="+" data-item="clue" value="clue">
                Clue
              </option>
              <option data-pol="+" data-item="contraption" value="contraption">
                Contraption
              </option>
              <option data-pol="+" data-item="equipment" value="equipment">
                Equipment
              </option>
              <option data-pol="+" data-item="food" value="food">
                Food
              </option>
              <option
                data-pol="+"
                data-item="fortification"
                value="fortification"
              >
                Fortification
              </option>
              <option data-pol="+" data-item="gold" value="gold">
                Gold
              </option>
              <option data-pol="+" data-item="treasure" value="treasure">
                Treasure
              </option>
              <option data-pol="+" data-item="vehicle" value="vehicle">
                Vehicle
              </option>
            </optgroup>
            <optgroup label="Enchantment Types">
              <option data-pol="+" data-item="aura" value="aura">
                Aura
              </option>
              <option data-pol="+" data-item="cartouche" value="cartouche">
                Cartouche
              </option>
              <option data-pol="+" data-item="curse" value="curse">
                Curse
              </option>
              <option data-pol="+" data-item="saga" value="saga">
                Saga
              </option>
              <option data-pol="+" data-item="shrine" value="shrine">
                Shrine
              </option>
            </optgroup>
            <optgroup label="Land Types">
              <option data-pol="+" data-item="desert" value="desert">
                Desert
              </option>
              <option data-pol="+" data-item="forest" value="forest">
                Forest
              </option>
              <option data-pol="+" data-item="gate" value="gate">
                Gate
              </option>
              <option data-pol="+" data-item="island" value="island">
                Island
              </option>
              <option data-pol="+" data-item="lair" value="lair">
                Lair
              </option>
              <option data-pol="+" data-item="locus" value="locus">
                Locus
              </option>
              <option data-pol="+" data-item="mine" value="mine">
                Mine
              </option>
              <option data-pol="+" data-item="mountain" value="mountain">
                Mountain
              </option>
              <option data-pol="+" data-item="plains" value="plains">
                Plains
              </option>
              <option data-pol="+" data-item="power-plant" value="power-plant">
                Power-Plant
              </option>
              <option data-pol="+" data-item="swamp" value="swamp">
                Swamp
              </option>
              <option data-pol="+" data-item="tower" value="tower">
                Tower
              </option>
              <option data-pol="+" data-item="urza’s" value="urza’s">
                Urza’s
              </option>
            </optgroup>
            <optgroup label="Spell Types">
              <option data-pol="+" data-item="adventure" value="adventure">
                Adventure
              </option>
              <option data-pol="+" data-item="arcane" value="arcane">
                Arcane
              </option>
              <option data-pol="+" data-item="trap" value="trap">
                Trap
              </option>
            </optgroup>
            <optgroup label="Planeswalker Types">
              <option data-pol="+" data-item="abian" value="abian">
                Abian
              </option>
              <option data-pol="+" data-item="ajani" value="ajani">
                Ajani
              </option>
              <option data-pol="+" data-item="aminatou" value="aminatou">
                Aminatou
              </option>
              <option data-pol="+" data-item="angrath" value="angrath">
                Angrath
              </option>
              <option data-pol="+" data-item="arlinn" value="arlinn">
                Arlinn
              </option>
              <option data-pol="+" data-item="ashiok" value="ashiok">
                Ashiok
              </option>
              <option data-pol="+" data-item="b.o.b." value="b.o.b.">
                B.O.B.
              </option>
              <option data-pol="+" data-item="bolas" value="bolas">
                Bolas
              </option>
              <option data-pol="+" data-item="calix" value="calix">
                Calix
              </option>
              <option data-pol="+" data-item="chandra" value="chandra">
                Chandra
              </option>
              <option data-pol="+" data-item="dack" value="dack">
                Dack
              </option>
              <option data-pol="+" data-item="daretti" value="daretti">
                Daretti
              </option>
              <option data-pol="+" data-item="davriel" value="davriel">
                Davriel
              </option>
              <option data-pol="+" data-item="domri" value="domri">
                Domri
              </option>
              <option data-pol="+" data-item="dovin" value="dovin">
                Dovin
              </option>
              <option data-pol="+" data-item="duck" value="duck">
                Duck
              </option>
              <option data-pol="+" data-item="dungeon" value="dungeon">
                Dungeon
              </option>
              <option data-pol="+" data-item="elspeth" value="elspeth">
                Elspeth
              </option>
              <option data-pol="+" data-item="estrid" value="estrid">
                Estrid
              </option>
              <option data-pol="+" data-item="freyalise" value="freyalise">
                Freyalise
              </option>
              <option data-pol="+" data-item="garruk" value="garruk">
                Garruk
              </option>
              <option data-pol="+" data-item="gideon" value="gideon">
                Gideon
              </option>
              <option data-pol="+" data-item="huatli" value="huatli">
                Huatli
              </option>
              <option data-pol="+" data-item="inzerva" value="inzerva">
                Inzerva
              </option>
              <option data-pol="+" data-item="jace" value="jace">
                Jace
              </option>
              <option data-pol="+" data-item="jaya" value="jaya">
                Jaya
              </option>
              <option data-pol="+" data-item="karn" value="karn">
                Karn
              </option>
              <option data-pol="+" data-item="kasmina" value="kasmina">
                Kasmina
              </option>
              <option data-pol="+" data-item="kaya" value="kaya">
                Kaya
              </option>
              <option data-pol="+" data-item="kiora" value="kiora">
                Kiora
              </option>
              <option data-pol="+" data-item="koth" value="koth">
                Koth
              </option>
              <option data-pol="+" data-item="liliana" value="liliana">
                Liliana
              </option>
              <option data-pol="+" data-item="lukka" value="lukka">
                Lukka
              </option>
              <option data-pol="+" data-item="master" value="master">
                Master
              </option>
              <option data-pol="+" data-item="nahiri" value="nahiri">
                Nahiri
              </option>
              <option data-pol="+" data-item="narset" value="narset">
                Narset
              </option>
              <option data-pol="+" data-item="nissa" value="nissa">
                Nissa
              </option>
              <option data-pol="+" data-item="nixilis" value="nixilis">
                Nixilis
              </option>
              <option data-pol="+" data-item="oko" value="oko">
                Oko
              </option>
              <option data-pol="+" data-item="ral" value="ral">
                Ral
              </option>
              <option data-pol="+" data-item="rowan" value="rowan">
                Rowan
              </option>
              <option data-pol="+" data-item="saheeli" value="saheeli">
                Saheeli
              </option>
              <option data-pol="+" data-item="samut" value="samut">
                Samut
              </option>
              <option data-pol="+" data-item="sarkhan" value="sarkhan">
                Sarkhan
              </option>
              <option data-pol="+" data-item="serra" value="serra">
                Serra
              </option>
              <option data-pol="+" data-item="sorin" value="sorin">
                Sorin
              </option>
              <option data-pol="+" data-item="tamiyo" value="tamiyo">
                Tamiyo
              </option>
              <option data-pol="+" data-item="teferi" value="teferi">
                Teferi
              </option>
              <option data-pol="+" data-item="teyo" value="teyo">
                Teyo
              </option>
              <option data-pol="+" data-item="tezzeret" value="tezzeret">
                Tezzeret
              </option>
              <option data-pol="+" data-item="tibalt" value="tibalt">
                Tibalt
              </option>
              <option data-pol="+" data-item="ugin" value="ugin">
                Ugin
              </option>
              <option data-pol="+" data-item="urza" value="urza">
                Urza
              </option>
              <option data-pol="+" data-item="venser" value="venser">
                Venser
              </option>
              <option data-pol="+" data-item="vivien" value="vivien">
                Vivien
              </option>
              <option data-pol="+" data-item="vraska" value="vraska">
                Vraska
              </option>
              <option data-pol="+" data-item="will" value="will">
                Will
              </option>
              <option data-pol="+" data-item="windgrace" value="windgrace">
                Windgrace
              </option>
              <option data-pol="+" data-item="wrenn" value="wrenn">
                Wrenn
              </option>
              <option data-pol="+" data-item="xenagos" value="xenagos">
                Xenagos
              </option>
              <option data-pol="+" data-item="yanggu" value="yanggu">
                Yanggu
              </option>
              <option data-pol="+" data-item="yanling" value="yanling">
                Yanling
              </option>
            </optgroup>
            <optgroup label="Creature Types">
              <option data-pol="+" data-item="advisor" value="advisor">
                Advisor
              </option>
              <option data-pol="+" data-item="aetherborn" value="aetherborn">
                Aetherborn
              </option>
              <option data-pol="+" data-item="alicorn" value="alicorn">
                Alicorn
              </option>
              <option data-pol="+" data-item="alien" value="alien">
                Alien
              </option>
              <option data-pol="+" data-item="ally" value="ally">
                Ally
              </option>
              <option data-pol="+" data-item="angel" value="angel">
                Angel
              </option>
              <option data-pol="+" data-item="antelope" value="antelope">
                Antelope
              </option>
              <option data-pol="+" data-item="ape" value="ape">
                Ape
              </option>
              <option data-pol="+" data-item="archer" value="archer">
                Archer
              </option>
              <option data-pol="+" data-item="archon" value="archon">
                Archon
              </option>
              <option data-pol="+" data-item="army" value="army">
                Army
              </option>
              <option data-pol="+" data-item="art" value="art">
                Art
              </option>
              <option data-pol="+" data-item="artificer" value="artificer">
                Artificer
              </option>
              <option data-pol="+" data-item="assassin" value="assassin">
                Assassin
              </option>
              <option
                data-pol="+"
                data-item="assembly-worker"
                value="assembly-worker"
              >
                Assembly-Worker
              </option>
              <option data-pol="+" data-item="atog" value="atog">
                Atog
              </option>
              <option data-pol="+" data-item="aurochs" value="aurochs">
                Aurochs
              </option>
              <option data-pol="+" data-item="autobot" value="autobot">
                Autobot
              </option>
              <option data-pol="+" data-item="avatar" value="avatar">
                Avatar
              </option>
              <option data-pol="+" data-item="azra" value="azra">
                Azra
              </option>
              <option data-pol="+" data-item="baddest," value="baddest,">
                Baddest,
              </option>
              <option data-pol="+" data-item="badger" value="badger">
                Badger
              </option>
              <option data-pol="+" data-item="barbarian" value="barbarian">
                Barbarian
              </option>
              <option data-pol="+" data-item="basilisk" value="basilisk">
                Basilisk
              </option>
              <option data-pol="+" data-item="bat" value="bat">
                Bat
              </option>
              <option data-pol="+" data-item="bear" value="bear">
                Bear
              </option>
              <option data-pol="+" data-item="beast" value="beast">
                Beast
              </option>
              <option data-pol="+" data-item="beaver" value="beaver">
                Beaver
              </option>
              <option data-pol="+" data-item="beeble" value="beeble">
                Beeble
              </option>
              <option data-pol="+" data-item="beholder" value="beholder">
                Beholder
              </option>
              <option data-pol="+" data-item="berserker" value="berserker">
                Berserker
              </option>
              <option data-pol="+" data-item="biggest," value="biggest,">
                Biggest,
              </option>
              <option data-pol="+" data-item="bird" value="bird">
                Bird
              </option>
              <option data-pol="+" data-item="blinkmoth" value="blinkmoth">
                Blinkmoth
              </option>
              <option data-pol="+" data-item="boar" value="boar">
                Boar
              </option>
              <option data-pol="+" data-item="brainiac" value="brainiac">
                Brainiac
              </option>
              <option data-pol="+" data-item="bringer" value="bringer">
                Bringer
              </option>
              <option data-pol="+" data-item="brushwagg" value="brushwagg">
                Brushwagg
              </option>
              <option data-pol="+" data-item="bureaucrat" value="bureaucrat">
                Bureaucrat
              </option>
              <option data-pol="+" data-item="camarid" value="camarid">
                Camarid
              </option>
              <option data-pol="+" data-item="camel" value="camel">
                Camel
              </option>
              <option data-pol="+" data-item="caribou" value="caribou">
                Caribou
              </option>
              <option data-pol="+" data-item="carrier" value="carrier">
                Carrier
              </option>
              <option data-pol="+" data-item="cat" value="cat">
                Cat
              </option>
              <option data-pol="+" data-item="centaur" value="centaur">
                Centaur
              </option>
              <option data-pol="+" data-item="cephalid" value="cephalid">
                Cephalid
              </option>
              <option data-pol="+" data-item="chameleon" value="chameleon">
                Chameleon
              </option>
              <option data-pol="+" data-item="chicken" value="chicken">
                Chicken
              </option>
              <option data-pol="+" data-item="child" value="child">
                Child
              </option>
              <option data-pol="+" data-item="chimera" value="chimera">
                Chimera
              </option>
              <option data-pol="+" data-item="citizen" value="citizen">
                Citizen
              </option>
              <option data-pol="+" data-item="clamfolk" value="clamfolk">
                Clamfolk
              </option>
              <option data-pol="+" data-item="cleric" value="cleric">
                Cleric
              </option>
              <option data-pol="+" data-item="cockatrice" value="cockatrice">
                Cockatrice
              </option>
              <option data-pol="+" data-item="construct" value="construct">
                Construct
              </option>
              <option data-pol="+" data-item="cow" value="cow">
                Cow
              </option>
              <option data-pol="+" data-item="coward" value="coward">
                Coward
              </option>
              <option data-pol="+" data-item="crab" value="crab">
                Crab
              </option>
              <option data-pol="+" data-item="crocodile" value="crocodile">
                Crocodile
              </option>
              <option data-pol="+" data-item="cyborg" value="cyborg">
                Cyborg
              </option>
              <option data-pol="+" data-item="cyclops" value="cyclops">
                Cyclops
              </option>
              <option data-pol="+" data-item="dauthi" value="dauthi">
                Dauthi
              </option>
              <option data-pol="+" data-item="deer" value="deer">
                Deer
              </option>
              <option data-pol="+" data-item="demigod" value="demigod">
                Demigod
              </option>
              <option data-pol="+" data-item="demon" value="demon">
                Demon
              </option>
              <option data-pol="+" data-item="deserter" value="deserter">
                Deserter
              </option>
              <option data-pol="+" data-item="designer" value="designer">
                Designer
              </option>
              <option data-pol="+" data-item="devil" value="devil">
                Devil
              </option>
              <option data-pol="+" data-item="dinosaur" value="dinosaur">
                Dinosaur
              </option>
              <option data-pol="+" data-item="djinn" value="djinn">
                Djinn
              </option>
              <option data-pol="+" data-item="dog" value="dog">
                Dog
              </option>
              <option data-pol="+" data-item="donkey" value="donkey">
                Donkey
              </option>
              <option data-pol="+" data-item="dragon" value="dragon">
                Dragon
              </option>
              <option data-pol="+" data-item="drake" value="drake">
                Drake
              </option>
              <option data-pol="+" data-item="dreadnought" value="dreadnought">
                Dreadnought
              </option>
              <option data-pol="+" data-item="drone" value="drone">
                Drone
              </option>
              <option data-pol="+" data-item="druid" value="druid">
                Druid
              </option>
              <option data-pol="+" data-item="dryad" value="dryad">
                Dryad
              </option>
              <option data-pol="+" data-item="dwarf" value="dwarf">
                Dwarf
              </option>
              <option data-pol="+" data-item="efreet" value="efreet">
                Efreet
              </option>
              <option data-pol="+" data-item="egg" value="egg">
                Egg
              </option>
              <option data-pol="+" data-item="elder" value="elder">
                Elder
              </option>
              <option data-pol="+" data-item="eldrazi" value="eldrazi">
                Eldrazi
              </option>
              <option data-pol="+" data-item="elemental" value="elemental">
                Elemental
              </option>
              <option data-pol="+" data-item="elemental?" value="elemental?">
                Elemental?
              </option>
              <option data-pol="+" data-item="elephant" value="elephant">
                Elephant
              </option>
              <option data-pol="+" data-item="elf" value="elf">
                Elf
              </option>
              <option data-pol="+" data-item="elk" value="elk">
                Elk
              </option>
              <option data-pol="+" data-item="elves" value="elves">
                Elves
              </option>
              <option data-pol="+" data-item="etiquette" value="etiquette">
                Etiquette
              </option>
              <option data-pol="+" data-item="eye" value="eye">
                Eye
              </option>
              <option data-pol="+" data-item="faerie" value="faerie">
                Faerie
              </option>
              <option data-pol="+" data-item="ferret" value="ferret">
                Ferret
              </option>
              <option data-pol="+" data-item="fish" value="fish">
                Fish
              </option>
              <option data-pol="+" data-item="flagbearer" value="flagbearer">
                Flagbearer
              </option>
              <option data-pol="+" data-item="fox" value="fox">
                Fox
              </option>
              <option data-pol="+" data-item="frog" value="frog">
                Frog
              </option>
              <option data-pol="+" data-item="fungus" value="fungus">
                Fungus
              </option>
              <option data-pol="+" data-item="gamer" value="gamer">
                Gamer
              </option>
              <option data-pol="+" data-item="gargoyle" value="gargoyle">
                Gargoyle
              </option>
              <option data-pol="+" data-item="germ" value="germ">
                Germ
              </option>
              <option data-pol="+" data-item="giant" value="giant">
                Giant
              </option>
              <option data-pol="+" data-item="gnome" value="gnome">
                Gnome
              </option>
              <option data-pol="+" data-item="goat" value="goat">
                Goat
              </option>
              <option data-pol="+" data-item="goblin" value="goblin">
                Goblin
              </option>
              <option data-pol="+" data-item="god" value="god">
                God
              </option>
              <option data-pol="+" data-item="golem" value="golem">
                Golem
              </option>
              <option data-pol="+" data-item="gorgon" value="gorgon">
                Gorgon
              </option>
              <option data-pol="+" data-item="grandchild" value="grandchild">
                Grandchild
              </option>
              <option data-pol="+" data-item="graveborn" value="graveborn">
                Graveborn
              </option>
              <option data-pol="+" data-item="gremlin" value="gremlin">
                Gremlin
              </option>
              <option data-pol="+" data-item="griffin" value="griffin">
                Griffin
              </option>
              <option data-pol="+" data-item="gus" value="gus">
                Gus
              </option>
              <option data-pol="+" data-item="hag" value="hag">
                Hag
              </option>
              <option data-pol="+" data-item="harpy" value="harpy">
                Harpy
              </option>
              <option data-pol="+" data-item="hatificer" value="hatificer">
                Hatificer
              </option>
              <option data-pol="+" data-item="head" value="head">
                Head
              </option>
              <option data-pol="+" data-item="hellion" value="hellion">
                Hellion
              </option>
              <option data-pol="+" data-item="hero" value="hero">
                Hero
              </option>
              <option data-pol="+" data-item="hippo" value="hippo">
                Hippo
              </option>
              <option data-pol="+" data-item="hippogriff" value="hippogriff">
                Hippogriff
              </option>
              <option data-pol="+" data-item="homarid" value="homarid">
                Homarid
              </option>
              <option data-pol="+" data-item="homunculus" value="homunculus">
                Homunculus
              </option>
              <option data-pol="+" data-item="hornet" value="hornet">
                Hornet
              </option>
              <option data-pol="+" data-item="horror" value="horror">
                Horror
              </option>
              <option data-pol="+" data-item="horse" value="horse">
                Horse
              </option>
              <option data-pol="+" data-item="hound" value="hound">
                Hound
              </option>
              <option data-pol="+" data-item="human" value="human">
                Human
              </option>
              <option data-pol="+" data-item="hydra" value="hydra">
                Hydra
              </option>
              <option data-pol="+" data-item="hyena" value="hyena">
                Hyena
              </option>
              <option data-pol="+" data-item="illusion" value="illusion">
                Illusion
              </option>
              <option data-pol="+" data-item="imp" value="imp">
                Imp
              </option>
              <option data-pol="+" data-item="incarnation" value="incarnation">
                Incarnation
              </option>
              <option data-pol="+" data-item="insect" value="insect">
                Insect
              </option>
              <option data-pol="+" data-item="island" value="island">
                Island
              </option>
              <option data-pol="+" data-item="jackal" value="jackal">
                Jackal
              </option>
              <option data-pol="+" data-item="jellyfish" value="jellyfish">
                Jellyfish
              </option>
              <option data-pol="+" data-item="juggernaut" value="juggernaut">
                Juggernaut
              </option>
              <option data-pol="+" data-item="kangaroo" value="kangaroo">
                Kangaroo
              </option>
              <option data-pol="+" data-item="kavu" value="kavu">
                Kavu
              </option>
              <option data-pol="+" data-item="killbot" value="killbot">
                Killbot
              </option>
              <option data-pol="+" data-item="kirin" value="kirin">
                Kirin
              </option>
              <option data-pol="+" data-item="kithkin" value="kithkin">
                Kithkin
              </option>
              <option data-pol="+" data-item="knight" value="knight">
                Knight
              </option>
              <option data-pol="+" data-item="kobold" value="kobold">
                Kobold
              </option>
              <option data-pol="+" data-item="kor" value="kor">
                Kor
              </option>
              <option data-pol="+" data-item="kraken" value="kraken">
                Kraken
              </option>
              <option data-pol="+" data-item="lady" value="lady">
                Lady
              </option>
              <option data-pol="+" data-item="lamia" value="lamia">
                Lamia
              </option>
              <option data-pol="+" data-item="lammasu" value="lammasu">
                Lammasu
              </option>
              <option data-pol="+" data-item="leech" value="leech">
                Leech
              </option>
              <option data-pol="+" data-item="leviathan" value="leviathan">
                Leviathan
              </option>
              <option data-pol="+" data-item="lhurgoyf" value="lhurgoyf">
                Lhurgoyf
              </option>
              <option data-pol="+" data-item="licid" value="licid">
                Licid
              </option>
              <option data-pol="+" data-item="lizard" value="lizard">
                Lizard
              </option>
              <option data-pol="+" data-item="lobster" value="lobster">
                Lobster
              </option>
              <option data-pol="+" data-item="locus" value="locus">
                Locus
              </option>
              <option data-pol="+" data-item="mammoth" value="mammoth">
                Mammoth
              </option>
              <option data-pol="+" data-item="manticore" value="manticore">
                Manticore
              </option>
              <option data-pol="+" data-item="masticore" value="masticore">
                Masticore
              </option>
              <option data-pol="+" data-item="mercenary" value="mercenary">
                Mercenary
              </option>
              <option data-pol="+" data-item="merfolk" value="merfolk">
                Merfolk
              </option>
              <option data-pol="+" data-item="metathran" value="metathran">
                Metathran
              </option>
              <option data-pol="+" data-item="mime" value="mime">
                Mime
              </option>
              <option data-pol="+" data-item="minion" value="minion">
                Minion
              </option>
              <option data-pol="+" data-item="minotaur" value="minotaur">
                Minotaur
              </option>
              <option data-pol="+" data-item="mole" value="mole">
                Mole
              </option>
              <option data-pol="+" data-item="monger" value="monger">
                Monger
              </option>
              <option data-pol="+" data-item="mongoose" value="mongoose">
                Mongoose
              </option>
              <option data-pol="+" data-item="monk" value="monk">
                Monk
              </option>
              <option data-pol="+" data-item="monkey" value="monkey">
                Monkey
              </option>
              <option data-pol="+" data-item="moonfolk" value="moonfolk">
                Moonfolk
              </option>
              <option data-pol="+" data-item="mouse" value="mouse">
                Mouse
              </option>
              <option data-pol="+" data-item="mummy" value="mummy">
                Mummy
              </option>
              <option data-pol="+" data-item="mutant" value="mutant">
                Mutant
              </option>
              <option data-pol="+" data-item="myr" value="myr">
                Myr
              </option>
              <option data-pol="+" data-item="mystic" value="mystic">
                Mystic
              </option>
              <option data-pol="+" data-item="naga" value="naga">
                Naga
              </option>
              <option data-pol="+" data-item="nastiest," value="nastiest,">
                Nastiest,
              </option>
              <option data-pol="+" data-item="nautilus" value="nautilus">
                Nautilus
              </option>
              <option data-pol="+" data-item="nephilim" value="nephilim">
                Nephilim
              </option>
              <option data-pol="+" data-item="nightmare" value="nightmare">
                Nightmare
              </option>
              <option data-pol="+" data-item="nightstalker" value="nightstalker">
                Nightstalker
              </option>
              <option data-pol="+" data-item="ninja" value="ninja">
                Ninja
              </option>
              <option data-pol="+" data-item="noble" value="noble">
                Noble
              </option>
              <option data-pol="+" data-item="noggle" value="noggle">
                Noggle
              </option>
              <option data-pol="+" data-item="nomad" value="nomad">
                Nomad
              </option>
              <option data-pol="+" data-item="nymph" value="nymph">
                Nymph
              </option>
              <option data-pol="+" data-item="octopus" value="octopus">
                Octopus
              </option>
              <option data-pol="+" data-item="ogre" value="ogre">
                Ogre
              </option>
              <option data-pol="+" data-item="ooze" value="ooze">
                Ooze
              </option>
              <option data-pol="+" data-item="orb" value="orb">
                Orb
              </option>
              <option data-pol="+" data-item="orc" value="orc">
                Orc
              </option>
              <option data-pol="+" data-item="orgg" value="orgg">
                Orgg
              </option>
              <option data-pol="+" data-item="otter" value="otter">
                Otter
              </option>
              <option data-pol="+" data-item="ouphe" value="ouphe">
                Ouphe
              </option>
              <option data-pol="+" data-item="ox" value="ox">
                Ox
              </option>
              <option data-pol="+" data-item="oyster" value="oyster">
                Oyster
              </option>
              <option data-pol="+" data-item="pangolin" value="pangolin">
                Pangolin
              </option>
              <option data-pol="+" data-item="paratrooper" value="paratrooper">
                Paratrooper
              </option>
              <option data-pol="+" data-item="peasant" value="peasant">
                Peasant
              </option>
              <option data-pol="+" data-item="pegasus" value="pegasus">
                Pegasus
              </option>
              <option data-pol="+" data-item="pentavite" value="pentavite">
                Pentavite
              </option>
              <option data-pol="+" data-item="pest" value="pest">
                Pest
              </option>
              <option data-pol="+" data-item="phelddagrif" value="phelddagrif">
                Phelddagrif
              </option>
              <option data-pol="+" data-item="phoenix" value="phoenix">
                Phoenix
              </option>
              <option data-pol="+" data-item="phyrexian" value="phyrexian">
                Phyrexian
              </option>
              <option data-pol="+" data-item="pilot" value="pilot">
                Pilot
              </option>
              <option data-pol="+" data-item="pincher" value="pincher">
                Pincher
              </option>
              <option data-pol="+" data-item="pirate" value="pirate">
                Pirate
              </option>
              <option data-pol="+" data-item="plant" value="plant">
                Plant
              </option>
              <option data-pol="+" data-item="praetor" value="praetor">
                Praetor
              </option>
              <option data-pol="+" data-item="prism" value="prism">
                Prism
              </option>
              <option data-pol="+" data-item="processor" value="processor">
                Processor
              </option>
              <option data-pol="+" data-item="proper" value="proper">
                Proper
              </option>
              <option data-pol="+" data-item="rabbit" value="rabbit">
                Rabbit
              </option>
              <option data-pol="+" data-item="raccoon" value="raccoon">
                Raccoon
              </option>
              <option data-pol="+" data-item="rat" value="rat">
                Rat
              </option>
              <option data-pol="+" data-item="rebel" value="rebel">
                Rebel
              </option>
              <option data-pol="+" data-item="reflection" value="reflection">
                Reflection
              </option>
              <option data-pol="+" data-item="reveler" value="reveler">
                Reveler
              </option>
              <option data-pol="+" data-item="rhino" value="rhino">
                Rhino
              </option>
              <option data-pol="+" data-item="rigger" value="rigger">
                Rigger
              </option>
              <option data-pol="+" data-item="rogue" value="rogue">
                Rogue
              </option>
              <option data-pol="+" data-item="rukh" value="rukh">
                Rukh
              </option>
              <option data-pol="+" data-item="sable" value="sable">
                Sable
              </option>
              <option data-pol="+" data-item="salamander" value="salamander">
                Salamander
              </option>
              <option data-pol="+" data-item="samurai" value="samurai">
                Samurai
              </option>
              <option data-pol="+" data-item="sand" value="sand">
                Sand
              </option>
              <option data-pol="+" data-item="saproling" value="saproling">
                Saproling
              </option>
              <option data-pol="+" data-item="satyr" value="satyr">
                Satyr
              </option>
              <option data-pol="+" data-item="scarecrow" value="scarecrow">
                Scarecrow
              </option>
              <option data-pol="+" data-item="scientist" value="scientist">
                Scientist
              </option>
              <option data-pol="+" data-item="scion" value="scion">
                Scion
              </option>
              <option data-pol="+" data-item="scorpion" value="scorpion">
                Scorpion
              </option>
              <option data-pol="+" data-item="scout" value="scout">
                Scout
              </option>
              <option data-pol="+" data-item="sculpture" value="sculpture">
                Sculpture
              </option>
              <option data-pol="+" data-item="serf" value="serf">
                Serf
              </option>
              <option data-pol="+" data-item="serpent" value="serpent">
                Serpent
              </option>
              <option data-pol="+" data-item="servo" value="servo">
                Servo
              </option>
              <option data-pol="+" data-item="shade" value="shade">
                Shade
              </option>
              <option data-pol="+" data-item="shaman" value="shaman">
                Shaman
              </option>
              <option data-pol="+" data-item="shapeshifter" value="shapeshifter">
                Shapeshifter
              </option>
              <option data-pol="+" data-item="shark" value="shark">
                Shark
              </option>
              <option data-pol="+" data-item="sheep" value="sheep">
                Sheep
              </option>
              <option data-pol="+" data-item="ship" value="ship">
                Ship
              </option>
              <option data-pol="+" data-item="siren" value="siren">
                Siren
              </option>
              <option data-pol="+" data-item="skeleton" value="skeleton">
                Skeleton
              </option>
              <option data-pol="+" data-item="slith" value="slith">
                Slith
              </option>
              <option data-pol="+" data-item="sliver" value="sliver">
                Sliver
              </option>
              <option data-pol="+" data-item="slug" value="slug">
                Slug
              </option>
              <option data-pol="+" data-item="snake" value="snake">
                Snake
              </option>
              <option data-pol="+" data-item="soldier" value="soldier">
                Soldier
              </option>
              <option data-pol="+" data-item="soltari" value="soltari">
                Soltari
              </option>
              <option data-pol="+" data-item="spawn" value="spawn">
                Spawn
              </option>
              <option data-pol="+" data-item="specter" value="specter">
                Specter
              </option>
              <option data-pol="+" data-item="spellshaper" value="spellshaper">
                Spellshaper
              </option>
              <option data-pol="+" data-item="sphinx" value="sphinx">
                Sphinx
              </option>
              <option data-pol="+" data-item="spider" value="spider">
                Spider
              </option>
              <option data-pol="+" data-item="spike" value="spike">
                Spike
              </option>
              <option data-pol="+" data-item="spirit" value="spirit">
                Spirit
              </option>
              <option data-pol="+" data-item="splinter" value="splinter">
                Splinter
              </option>
              <option data-pol="+" data-item="sponge" value="sponge">
                Sponge
              </option>
              <option data-pol="+" data-item="spy" value="spy">
                Spy
              </option>
              <option data-pol="+" data-item="squid" value="squid">
                Squid
              </option>
              <option data-pol="+" data-item="squirrel" value="squirrel">
                Squirrel
              </option>
              <option data-pol="+" data-item="starfish" value="starfish">
                Starfish
              </option>
              <option data-pol="+" data-item="surrakar" value="surrakar">
                Surrakar
              </option>
              <option data-pol="+" data-item="survivor" value="survivor">
                Survivor
              </option>
              <option data-pol="+" data-item="teddy" value="teddy">
                Teddy
              </option>
              <option data-pol="+" data-item="tentacle" value="tentacle">
                Tentacle
              </option>
              <option data-pol="+" data-item="tetravite" value="tetravite">
                Tetravite
              </option>
              <option data-pol="+" data-item="thalakos" value="thalakos">
                Thalakos
              </option>
              <option data-pol="+" data-item="the" value="the">
                The
              </option>
              <option data-pol="+" data-item="thopter" value="thopter">
                Thopter
              </option>
              <option data-pol="+" data-item="thrull" value="thrull">
                Thrull
              </option>
              <option data-pol="+" data-item="townsfolk" value="townsfolk">
                Townsfolk
              </option>
              <option data-pol="+" data-item="treefolk" value="treefolk">
                Treefolk
              </option>
              <option data-pol="+" data-item="trilobite" value="trilobite">
                Trilobite
              </option>
              <option data-pol="+" data-item="triskelavite" value="triskelavite">
                Triskelavite
              </option>
              <option data-pol="+" data-item="troll" value="troll">
                Troll
              </option>
              <option data-pol="+" data-item="turtle" value="turtle">
                Turtle
              </option>
              <option data-pol="+" data-item="unicorn" value="unicorn">
                Unicorn
              </option>
              <option data-pol="+" data-item="vampire" value="vampire">
                Vampire
              </option>
              <option data-pol="+" data-item="vampyre" value="vampyre">
                Vampyre
              </option>
              <option data-pol="+" data-item="vedalken" value="vedalken">
                Vedalken
              </option>
              <option data-pol="+" data-item="viashino" value="viashino">
                Viashino
              </option>
              <option data-pol="+" data-item="villain" value="villain">
                Villain
              </option>
              <option data-pol="+" data-item="volver" value="volver">
                Volver
              </option>
              <option data-pol="+" data-item="waiter" value="waiter">
                Waiter
              </option>
              <option data-pol="+" data-item="wall" value="wall">
                Wall
              </option>
              <option data-pol="+" data-item="warlock" value="warlock">
                Warlock
              </option>
              <option data-pol="+" data-item="warrior" value="warrior">
                Warrior
              </option>
              <option data-pol="+" data-item="wasp" value="wasp">
                Wasp
              </option>
              <option data-pol="+" data-item="weird" value="weird">
                Weird
              </option>
              <option data-pol="+" data-item="werewolf" value="werewolf">
                Werewolf
              </option>
              <option data-pol="+" data-item="whale" value="whale">
                Whale
              </option>
              <option data-pol="+" data-item="wizard" value="wizard">
                Wizard
              </option>
              <option data-pol="+" data-item="wolf" value="wolf">
                Wolf
              </option>
              <option data-pol="+" data-item="wolverine" value="wolverine">
                Wolverine
              </option>
              <option data-pol="+" data-item="wombat" value="wombat">
                Wombat
              </option>
              <option data-pol="+" data-item="worm" value="worm">
                Worm
              </option>
              <option data-pol="+" data-item="wraith" value="wraith">
                Wraith
              </option>
              <option data-pol="+" data-item="wrestler" value="wrestler">
                Wrestler
              </option>
              <option data-pol="+" data-item="wurm" value="wurm">
                Wurm
              </option>
              <option data-pol="+" data-item="yeti" value="yeti">
                Yeti
              </option>
              <option data-pol="+" data-item="zombie" value="zombie">
                Zombie
              </option>
              <option data-pol="+" data-item="zubera" value="zubera">
                Zubera
              </option>
            </optgroup>
            <optgroup label="Planar Types">
              <option data-pol="+" data-item="alara" value="alara">
                Alara
              </option>
              <option data-pol="+" data-item="arkhos" value="arkhos">
                Arkhos
              </option>
              <option data-pol="+" data-item="azgol" value="azgol">
                Azgol
              </option>
              <option data-pol="+" data-item="belenon" value="belenon">
                Belenon
              </option>
              <option
                data-pol="+"
                data-item="bolas’s meditation realm"
                value="bolas’s meditation realm"
              >
                Bolas’s Meditation Realm
              </option>
              <option data-pol="+" data-item="dominaria" value="dominaria">
                Dominaria
              </option>
              <option data-pol="+" data-item="equilor" value="equilor">
                Equilor
              </option>
              <option data-pol="+" data-item="ergamon" value="ergamon">
                Ergamon
              </option>
              <option data-pol="+" data-item="fabacin" value="fabacin">
                Fabacin
              </option>
              <option data-pol="+" data-item="innistrad" value="innistrad">
                Innistrad
              </option>
              <option data-pol="+" data-item="iquatana" value="iquatana">
                Iquatana
              </option>
              <option data-pol="+" data-item="ir" value="ir">
                Ir
              </option>
              <option data-pol="+" data-item="kaldheim" value="kaldheim">
                Kaldheim
              </option>
              <option data-pol="+" data-item="kamigawa" value="kamigawa">
                Kamigawa
              </option>
              <option data-pol="+" data-item="karsus" value="karsus">
                Karsus
              </option>
              <option data-pol="+" data-item="kephalai" value="kephalai">
                Kephalai
              </option>
              <option data-pol="+" data-item="kinshala" value="kinshala">
                Kinshala
              </option>
              <option data-pol="+" data-item="kolbahan" value="kolbahan">
                Kolbahan
              </option>
              <option data-pol="+" data-item="kyneth" value="kyneth">
                Kyneth
              </option>
              <option data-pol="+" data-item="lorwyn" value="lorwyn">
                Lorwyn
              </option>
              <option data-pol="+" data-item="luvion" value="luvion">
                Luvion
              </option>
              <option data-pol="+" data-item="mercadia" value="mercadia">
                Mercadia
              </option>
              <option data-pol="+" data-item="mirrodin" value="mirrodin">
                Mirrodin
              </option>
              <option data-pol="+" data-item="moag" value="moag">
                Moag
              </option>
              <option data-pol="+" data-item="mongseng" value="mongseng">
                Mongseng
              </option>
              <option data-pol="+" data-item="muraganda" value="muraganda">
                Muraganda
              </option>
              <option data-pol="+" data-item="new phyrexia" value="new phyrexia">
                New Phyrexia
              </option>
              <option data-pol="+" data-item="phyrexia" value="phyrexia">
                Phyrexia
              </option>
              <option data-pol="+" data-item="pyrulea" value="pyrulea">
                Pyrulea
              </option>
              <option data-pol="+" data-item="rabiah" value="rabiah">
                Rabiah
              </option>
              <option data-pol="+" data-item="rath" value="rath">
                Rath
              </option>
              <option data-pol="+" data-item="ravnica" value="ravnica">
                Ravnica
              </option>
              <option data-pol="+" data-item="regatha" value="regatha">
                Regatha
              </option>
              <option data-pol="+" data-item="segovia" value="segovia">
                Segovia
              </option>
              <option
                data-pol="+"
                data-item="serra’s realm"
                value="serra’s realm"
              >
                Serra’s Realm
              </option>
              <option data-pol="+" data-item="shadowmoor" value="shadowmoor">
                Shadowmoor
              </option>
              <option data-pol="+" data-item="shandalar" value="shandalar">
                Shandalar
              </option>
              <option data-pol="+" data-item="ulgrotha" value="ulgrotha">
                Ulgrotha
              </option>
              <option data-pol="+" data-item="valla" value="valla">
                Valla
              </option>
              <option data-pol="+" data-item="vryn" value="vryn">
                Vryn
              </option>
              <option data-pol="+" data-item="wildfire" value="wildfire">
                Wildfire
              </option>
              <option data-pol="+" data-item="xerex" value="xerex">
                Xerex
              </option>
              <option data-pol="+" data-item="zendikar" value="zendikar">
                Zendikar
              </option>
            </optgroup>
          </select>
          <p>Choose any card type, supertype, or subtypes to match.</p>
        </div>
      </div>
      <div className="advancedsearch__section">
        <a className="advancedsearch__section--title">Colors</a>
        <div className="advancedsearch__section--options">
          <div>
            <input type="checkbox" name="W" value="W" 
              defaultChecked = {searchConditions && searchConditions.color && searchConditions.color.split('').includes("W")?true:false}
            />
            <a>White</a>
            <input type="checkbox" name="U" value="U" 
              defaultChecked = {searchConditions && searchConditions.color && searchConditions.color.split('').includes("U")?true:false}
            />
            <a>Blue</a>
            <input type="checkbox" name="B" value="B" 
              defaultChecked = {searchConditions && searchConditions.color && searchConditions.color.split('').includes("B")?true:false}
            />
            <a>Black</a>
          </div>
          <div>
            <input type="checkbox" name="R" value="R" 
              defaultChecked = {searchConditions && searchConditions.color && searchConditions.color.split('').includes("R")?true:false}
            />
            <a>Red</a>
            <input type="checkbox" name="G" value="G" 
              defaultChecked = {searchConditions && searchConditions.color && searchConditions.color.split('').includes("G")?true:false}
            />
            <a>Green</a>
            <input type="checkbox" name="C" value="C" 
              defaultChecked = {searchConditions && searchConditions.color && searchConditions.color.split('').includes("C")?true:false}
            />
            <a>Colorless</a>
          </div>
          <select id="color_comparison"
            defaultValue = {searchConditions && searchConditions.colorLimit?searchConditions.colorLimit:"="}
          >
            <option value="=">Exactly these colors</option>
            <option value=">=">Including these colors</option>
            <option value="<=">At most these colors</option>
          </select>
          <p>
            Including" means cards that are all the colors you select, with or
            without any others. "At most" means cards that have some or all of the
            colors you select, plus colorless.
          </p>
        </div>
      </div>
      <div className="advancedsearch__section">
        <a className="advancedsearch__section--title">Manacost</a>
        <div className="advancedsearch__section--options">
          <input
            type="text"
            name="mana"
            id="manacost"
            placeholder=" Any mana symbols, e.g. {WB}"
            defaultValue = {searchConditions && searchConditions.mana?searchConditions.mana:""}

          />
          <select name = "symbols" id="manasymbols" onChange = {()=>{event.preventDefault(); changeManacost(event)}}>
            <option value = "">Add symbol</option>
            <option value="{W}">
              {"{"}W{"}"} – one white mana
            </option>
            <option value="{U}">
              {"{"}U{"}"} – one blue mana
            </option>
            <option value="{B}">
              {"{"}B{"}"} – one black mana
            </option>
            <option value="{R}">
              {"{"}R{"}"} – one red mana
            </option>
            <option value="{G}">
              {"{"}G{"}"} – one green mana
            </option>
            <option value="{C}">
              {"{"}C{"}"} – one colorless mana
            </option>
            <option value="{X}">
              {"{"}X{"}"} – X generic mana
            </option>
            <option value="{0}">
              {"{"}0{"}"} – zero mana
            </option>
            <option value="{1}">
              {"{"}1{"}"} – one generic mana
            </option>
            <option value="{2}">
              {"{"}2{"}"} – two generic mana
            </option>
            <option value="{3}">
              {"{"}3{"}"} – three generic mana
            </option>
            <option value="{4}">
              {"{"}4{"}"} – four generic mana
            </option>
            <option value="{5}">
              {"{"}5{"}"} – five generic mana
            </option>
            <option value="{6}">
              {"{"}6{"}"} – six generic mana
            </option>
            <option value="{7}">
              {"{"}7{"}"} – seven generic mana
            </option>
            <option value="{8}">
              {"{"}8{"}"} – eight generic mana
            </option>
            <option value="{9}">
              {"{"}9{"}"} – nine generic mana
            </option>
            <option value="{10}">
              {"{"}10{"}"} – ten generic mana
            </option>
            <option value="{11}">
              {"{"}11{"}"} – eleven generic mana
            </option>
            <option value="{12}">
              {"{"}12{"}"} – twelve generic mana
            </option>
            <option value="{13}">
              {"{"}13{"}"} – thirteen generic mana
            </option>
            <option value="{15}">
              {"{"}15{"}"} – fifteen generic mana
            </option>
            <option value="{16}">
              {"{"}16{"}"} – sixteen generic mana
            </option>
            <option value="{W/U}">
              {"{"}W/U{"}"} – one white or blue mana
            </option>
            <option value="{W/B}">
              {"{"}W/B{"}"} – one white or black mana
            </option>
            <option value="{B/R}">
              {"{"}B/R{"}"} – one black or red mana
            </option>
            <option value="{B/G}">
              {"{"}B/G{"}"} – one black or green mana
            </option>
            <option value="{U/B}">
              {"{"}U/B{"}"} – one blue or black mana
            </option>
            <option value="{U/R}">
              {"{"}U/R{"}"} – one blue or red mana
            </option>
            <option value="{R/G}">
              {"{"}R/G{"}"} – one red or green mana
            </option>
            <option value="{R/W}">
              {"{"}R/W{"}"} – one red or white mana
            </option>
            <option value="{G/W}">
              {"{"}G/W{"}"} – one green or white mana
            </option>
            <option value="{G/U}">
              {"{"}G/U{"}"} – one green or blue mana
            </option>
            <option value="{2/W}">
              {"{"}2/W{"}"} – two generic mana or one white mana
            </option>
            <option value="{2/U}">
              {"{"}2/U{"}"} – two generic mana or one blue mana
            </option>
            <option value="{2/B}">
              {"{"}2/B{"}"} – two generic mana or one black mana
            </option>
            <option value="{2/R}">
              {"{"}2/R{"}"} – two generic mana or one red mana
            </option>
            <option value="{2/G}">
              {"{"}2/G{"}"} – two generic mana or one green mana
            </option>
            <option value="{W/P}">
              {"{"}W/P{"}"} – one white mana or two life
            </option>
            <option value="{U/P}">
              {"{"}U/P{"}"} – one blue mana or two life
            </option>
            <option value="{B/P}">
              {"{"}B/P{"}"} – one black mana or two life
            </option>
            <option value="{R/P}">
              {"{"}R/P{"}"} – one red mana or two life
            </option>
            <option value="{G/P}">
              {"{"}G/P{"}"} – one green mana or two life
            </option>
            <option value="{S}">
              {"{"}S{"}"} – one snow mana
            </option>
          </select>
          <p>
            Enter symbols that should be in the mana cost. Combine with CMC to
            search this exact amount.
          </p>
        </div>
      </div>
      <div className="advancedsearch__section">
        <a className="advancedsearch__section--title">Stats</a>
        <div className="advancedsearch__section--options">
          <select 
          id="stat_1"
          defaultValue = {searchConditions?(searchConditions.cmc?"cmc":"") + (searchConditions.power?"pow":"") + (searchConditions.toughness?"tou":"") + (searchConditions.loyalty?"loy":""):"cmc"}
          >
            <option value="cmc">CMC</option>
            <option value="pow">Power</option>
            <option value="tou">Toughness</option>
            <option value="loy">Loyalty</option>
          </select>
          <select 
          id="stat_1_mode"
          defaultValue = {searchConditions && searchConditions.limit?searchConditions.limit:"="}
          >
            <option value="=">equals</option>
            <option value="<">less than</option>
            <option value=">">greater than</option>
            <option value="<=">less than or equal to</option>
            <option value=">=">greater than or equal to</option>
            <option value="!=">not equal to</option>
          </select>
          <input type="number" name="statnumber" placeholder= "Any number" 
            defaultValue = {(searchConditions && searchConditions.cmc?searchConditions.cmc:"") + (searchConditions && searchConditions.power?searchConditions.power:"") + (searchConditions && searchConditions.toughness?searchConditions.toughness:"") + (searchConditions && searchConditions.loyalty?searchConditions.loyalty:"")}
          />
          <p>
            Restrict cards based on their numeric statistics. Cards without stats
            will not be returned.
          </p>
        </div>
      </div>
      <div className="advancedsearch__section">
        <a className="advancedsearch__section--title">Formats</a>
        <div className="advancedsearch__section--options">
          <select id="legality"
            defaultValue = {searchConditions && searchConditions.legality?searchConditions.legality:"f"}
          >
            <option value="f">Legal</option>
            <option value="restricted">Restricted</option>
            <option value="banned">Banned</option>
          </select>
          <select id="formats"
            defaultValue = {searchConditions && searchConditions.format?searchConditions.format:""}
          >
            <option value = "">Format</option>
            <option value="standard">Standard</option>
            <option value="future">Future Standard</option>
            <option value="historic">Historic</option>
            <option value="pioneer">Pioneer</option>
            <option value="modern">Modern</option>
            <option value="legacy">Legacy</option>
            <option value="pauper">Pauper</option>
            <option value="vintage">Vintage</option>
            <option value="penny">Penny Dreadful</option>
            <option value="commander">Commander</option>
            <option value="brawl">Brawl</option>
            <option value="duel">Duel Commander</option>
            <option value="oldschool">Old School 93/94</option>
          </select>
          <p>
            Future Standard lets you brew using the upcoming standard
            additions/rotations.
          </p>
        </div>
      </div>
      <div className="advancedsearch__section">
        <a className="advancedsearch__section--title">Sets</a>
        <div className="advancedsearch__section--options">
          <select id="sets"
            defaultValue = {searchConditions && searchConditions.set?searchConditions.set:""}
          >
            <option value = "">Set</option>
            <optgroup label="Expansions">
              <option data-svg-code="iko" value="iko">
                Ikoria: Lair of Behemoths (IKO)
              </option>
              <option data-svg-code="thb" value="thb">
                Theros Beyond Death (THB)
              </option>
              <option data-svg-code="eld" value="eld">
                Throne of Eldraine (ELD)
              </option>
              <option data-svg-code="war" value="war">
                War of the Spark (WAR)
              </option>
              <option data-svg-code="rna" value="rna">
                Ravnica Allegiance (RNA)
              </option>
              <option data-svg-code="grn" value="grn">
                Guilds of Ravnica (GRN)
              </option>
              <option data-svg-code="dom" value="dom">
                Dominaria (DOM)
              </option>
              <option data-svg-code="rix" value="rix">
                Rivals of Ixalan (RIX)
              </option>
              <option data-svg-code="xln" value="xln">
                Ixalan (XLN)
              </option>
              <option data-svg-code="hou" value="hou">
                Hour of Devastation (HOU)
              </option>
              <option data-svg-code="akh" value="akh">
                Amonkhet (AKH)
              </option>
              <option data-svg-code="aer" value="aer">
                Aether Revolt (AER)
              </option>
              <option data-svg-code="kld" value="kld">
                Kaladesh (KLD)
              </option>
              <option data-svg-code="emn" value="emn">
                Eldritch Moon (EMN)
              </option>
              <option data-svg-code="soi" value="soi">
                Shadows over Innistrad (SOI)
              </option>
              <option data-svg-code="ogw" value="ogw">
                Oath of the Gatewatch (OGW)
              </option>
              <option data-svg-code="bfz" value="bfz">
                Battle for Zendikar (BFZ)
              </option>
              <option data-svg-code="dtk" value="dtk">
                Dragons of Tarkir (DTK)
              </option>
              <option data-svg-code="frf" value="frf">
                Fate Reforged (FRF)
              </option>
              <option data-svg-code="ktk" value="ktk">
                Khans of Tarkir (KTK)
              </option>
              <option data-svg-code="jou" value="jou">
                Journey into Nyx (JOU)
              </option>
              <option data-svg-code="bng" value="bng">
                Born of the Gods (BNG)
              </option>
              <option data-svg-code="ths" value="ths">
                Theros (THS)
              </option>
              <option data-svg-code="dgm" value="dgm">
                Dragon's Maze (DGM)
              </option>
              <option data-svg-code="gtc" value="gtc">
                Gatecrash (GTC)
              </option>
              <option data-svg-code="rtr" value="rtr">
                Return to Ravnica (RTR)
              </option>
              <option data-svg-code="avr" value="avr">
                Avacyn Restored (AVR)
              </option>
              <option data-svg-code="dka" value="dka">
                Dark Ascension (DKA)
              </option>
              <option data-svg-code="isd" value="isd">
                Innistrad (ISD)
              </option>
              <option data-svg-code="nph" value="nph">
                New Phyrexia (NPH)
              </option>
              <option data-svg-code="mbs" value="mbs">
                Mirrodin Besieged (MBS)
              </option>
              <option data-svg-code="som" value="som">
                Scars of Mirrodin (SOM)
              </option>
              <option data-svg-code="roe" value="roe">
                Rise of the Eldrazi (ROE)
              </option>
              <option data-svg-code="wwk" value="wwk">
                Worldwake (WWK)
              </option>
              <option data-svg-code="zen" value="zen">
                Zendikar (ZEN)
              </option>
              <option data-svg-code="arb" value="arb">
                Alara Reborn (ARB)
              </option>
              <option data-svg-code="con" value="con">
                Conflux (CON)
              </option>
              <option data-svg-code="ala" value="ala">
                Shards of Alara (ALA)
              </option>
              <option data-svg-code="eve" value="eve">
                Eventide (EVE)
              </option>
              <option data-svg-code="shm" value="shm">
                Shadowmoor (SHM)
              </option>
              <option data-svg-code="mor" value="mor">
                Morningtide (MOR)
              </option>
              <option data-svg-code="lrw" value="lrw">
                Lorwyn (LRW)
              </option>
              <option data-svg-code="fut" value="fut">
                Future Sight (FUT)
              </option>
              <option data-svg-code="plc" value="plc">
                Planar Chaos (PLC)
              </option>
              <option data-svg-code="tsp" value="tsp">
                Time Spiral (TSP)
              </option>
              <option data-svg-code="tsp" value="tsb">
                Time Spiral Timeshifted (TSB)
              </option>
              <option data-svg-code="csp" value="csp">
                Coldsnap (CSP)
              </option>
              <option data-svg-code="dis" value="dis">
                Dissension (DIS)
              </option>
              <option data-svg-code="gpt" value="gpt">
                Guildpact (GPT)
              </option>
              <option data-svg-code="rav" value="rav">
                Ravnica: City of Guilds (RAV)
              </option>
              <option data-svg-code="sok" value="sok">
                Saviors of Kamigawa (SOK)
              </option>
              <option data-svg-code="bok" value="bok">
                Betrayers of Kamigawa (BOK)
              </option>
              <option data-svg-code="chk" value="chk">
                Champions of Kamigawa (CHK)
              </option>
              <option data-svg-code="5dn" value="5dn">
                Fifth Dawn (5DN)
              </option>
              <option data-svg-code="dst" value="dst">
                Darksteel (DST)
              </option>
              <option data-svg-code="mrd" value="mrd">
                Mirrodin (MRD)
              </option>
              <option data-svg-code="scg" value="scg">
                Scourge (SCG)
              </option>
              <option data-svg-code="lgn" value="lgn">
                Legions (LGN)
              </option>
              <option data-svg-code="ons" value="ons">
                Onslaught (ONS)
              </option>
              <option data-svg-code="jud" value="jud">
                Judgment (JUD)
              </option>
              <option data-svg-code="tor" value="tor">
                Torment (TOR)
              </option>
              <option data-svg-code="ody" value="ody">
                Odyssey (ODY)
              </option>
              <option data-svg-code="apc" value="apc">
                Apocalypse (APC)
              </option>
              <option data-svg-code="pls" value="pls">
                Planeshift (PLS)
              </option>
              <option data-svg-code="inv" value="inv">
                Invasion (INV)
              </option>
              <option data-svg-code="pcy" value="pcy">
                Prophecy (PCY)
              </option>
              <option data-svg-code="nem" value="nem">
                Nemesis (NEM)
              </option>
              <option data-svg-code="mmq" value="mmq">
                Mercadian Masques (MMQ)
              </option>
              <option data-svg-code="uds" value="uds">
                Urza's Destiny (UDS)
              </option>
              <option data-svg-code="ulg" value="ulg">
                Urza's Legacy (ULG)
              </option>
              <option data-svg-code="usg" value="usg">
                Urza's Saga (USG)
              </option>
              <option data-svg-code="exo" value="exo">
                Exodus (EXO)
              </option>
              <option data-svg-code="sth" value="sth">
                Stronghold (STH)
              </option>
              <option data-svg-code="tmp" value="tmp">
                Tempest (TMP)
              </option>
              <option data-svg-code="wth" value="wth">
                Weatherlight (WTH)
              </option>
              <option data-svg-code="vis" value="vis">
                Visions (VIS)
              </option>
              <option data-svg-code="mir" value="mir">
                Mirage (MIR)
              </option>
              <option data-svg-code="all" value="all">
                Alliances (ALL)
              </option>
              <option data-svg-code="hml" value="hml">
                Homelands (HML)
              </option>
              <option data-svg-code="ice" value="ice">
                Ice Age (ICE)
              </option>
              <option data-svg-code="fem" value="fem">
                Fallen Empires (FEM)
              </option>
              <option data-svg-code="drk" value="drk">
                The Dark (DRK)
              </option>
              <option data-svg-code="leg" value="leg">
                Legends (LEG)
              </option>
              <option data-svg-code="atq" value="atq">
                Antiquities (ATQ)
              </option>
              <option data-svg-code="arn" value="arn">
                Arabian Nights (ARN)
              </option>
            </optgroup>
            <optgroup label="Core Sets">
              <option data-svg-code="m20" value="m20">
                Core Set 2020 (M20)
              </option>
              <option data-svg-code="m19" value="m19">
                Core Set 2019 (M19)
              </option>
              <option data-svg-code="ori" value="ori">
                Magic Origins (ORI)
              </option>
              <option data-svg-code="m15" value="m15">
                Magic 2015 (M15)
              </option>
              <option data-svg-code="m14" value="m14">
                Magic 2014 (M14)
              </option>
              <option data-svg-code="m13" value="m13">
                Magic 2013 (M13)
              </option>
              <option data-svg-code="m12" value="m12">
                Magic 2012 (M12)
              </option>
              <option data-svg-code="m11" value="m11">
                Magic 2011 (M11)
              </option>
              <option data-svg-code="m10" value="m10">
                Magic 2010 (M10)
              </option>
              <option data-svg-code="10e" value="10e">
                Tenth Edition (10E)
              </option>
              <option data-svg-code="9ed" value="9ed">
                Ninth Edition (9ED)
              </option>
              <option data-svg-code="8ed" value="8ed">
                Eighth Edition (8ED)
              </option>
              <option data-svg-code="7ed" value="7ed">
                Seventh Edition (7ED)
              </option>
              <option data-svg-code="6ed" value="6ed">
                Classic Sixth Edition (6ED)
              </option>
              <option data-svg-code="5ed" value="5ed">
                Fifth Edition (5ED)
              </option>
              <option data-svg-code="4ed" value="4bb">
                Fourth Edition Foreign Black Border (4BB)
              </option>
              <option data-svg-code="4ed" value="4ed">
                Fourth Edition (4ED)
              </option>
              <option data-svg-code="psum" value="sum">
                Summer Magic / Edgar (SUM)
              </option>
              <option data-svg-code="3ed" value="3ed">
                Revised Edition (3ED)
              </option>
              <option data-svg-code="3ed" value="fbb">
                Foreign Black Border (FBB)
              </option>
              <option data-svg-code="2ed" value="2ed">
                Unlimited Edition (2ED)
              </option>
              <option data-svg-code="leb" value="leb">
                Limited Edition Beta (LEB)
              </option>
              <option data-svg-code="lea" value="lea">
                Limited Edition Alpha (LEA)
              </option>
            </optgroup>
            <optgroup label="Masters">
              <option data-svg-code="planeswalker" value="fmb1">
                Mystery Booster Retail Edition Foils (FMB1)
              </option>
              <option data-svg-code="planeswalker" value="mb1">
                Mystery Booster (MB1)
              </option>
              <option data-svg-code="uma" value="uma">
                Ultimate Masters (UMA)
              </option>
              <option data-svg-code="a25" value="a25">
                Masters 25 (A25)
              </option>
              <option data-svg-code="ima" value="ima">
                Iconic Masters (IMA)
              </option>
              <option data-svg-code="mm3" value="mm3">
                Modern Masters 2017 (MM3)
              </option>
              <option data-svg-code="ema" value="ema">
                Eternal Masters (EMA)
              </option>
              <option data-svg-code="mm2" value="mm2">
                Modern Masters 2015 (MM2)
              </option>
              <option data-svg-code="tpr" value="tpr">
                Tempest Remastered (TPR)
              </option>
              <option data-svg-code="vma" value="vma">
                Vintage Masters (VMA)
              </option>
              <option data-svg-code="mma" value="mma">
                Modern Masters (MMA)
              </option>
              <option data-svg-code="me4" value="me4">
                Masters Edition IV (ME4)
              </option>
              <option data-svg-code="me3" value="me3">
                Masters Edition III (ME3)
              </option>
              <option data-svg-code="me2" value="me2">
                Masters Edition II (ME2)
              </option>
              <option data-svg-code="me1" value="me1">
                Masters Edition (ME1)
              </option>
              <option data-svg-code="rin" value="rin">
                Rinascimento (RIN)
              </option>
              <option data-svg-code="ren" value="ren">
                Renaissance (REN)
              </option>
              <option data-svg-code="chr" value="chr">
                Chronicles (CHR)
              </option>
            </optgroup>
            <optgroup label="Draft Innovation">
              <option data-svg-code="mh1" value="mh1">
                Modern Horizons (MH1)
              </option>
              <option data-svg-code="bbd" value="bbd">
                Battlebond (BBD)
              </option>
              <option data-svg-code="cn2" value="cn2">
                Conspiracy: Take the Crown (CN2)
              </option>
              <option data-svg-code="cns" value="cns">
                Conspiracy (CNS)
              </option>
            </optgroup>
            <optgroup label="Duel Decks">
              <option data-svg-code="gs1" value="gs1">
                Global Series Jiang Yanggu &amp; Mu Yanling (GS1)
              </option>
              <option data-svg-code="ddu" value="ddu">
                Duel Decks: Elves vs. Inventors (DDU)
              </option>
              <option data-svg-code="ddt" value="ddt">
                Duel Decks: Merfolk vs. Goblins (DDT)
              </option>
              <option data-svg-code="dds" value="dds">
                Duel Decks: Mind vs. Might (DDS)
              </option>
              <option data-svg-code="ddr" value="ddr">
                Duel Decks: Nissa vs. Ob Nixilis (DDR)
              </option>
              <option data-svg-code="ddq" value="ddq">
                Duel Decks: Blessed vs. Cursed (DDQ)
              </option>
              <option data-svg-code="ddp" value="ddp">
                Duel Decks: Zendikar vs. Eldrazi (DDP)
              </option>
              <option data-svg-code="ddo" value="ddo">
                Duel Decks: Elspeth vs. Kiora (DDO)
              </option>
              <option data-svg-code="dd1" value="evg">
                Duel Decks Anthology: Elves vs. Goblins (EVG)
              </option>
              <option data-svg-code="ddd" value="gvl">
                Duel Decks Anthology: Garruk vs. Liliana (GVL)
              </option>
              <option data-svg-code="dd2" value="jvc">
                Duel Decks Anthology: Jace vs. Chandra (JVC)
              </option>
              <option data-svg-code="ddc" value="dvd">
                Duel Decks Anthology: Divine vs. Demonic (DVD)
              </option>
              <option data-svg-code="ddn" value="ddn">
                Duel Decks: Speed vs. Cunning (DDN)
              </option>
              <option data-svg-code="ddm" value="ddm">
                Duel Decks: Jace vs. Vraska (DDM)
              </option>
              <option data-svg-code="ddl" value="ddl">
                Duel Decks: Heroes vs. Monsters (DDL)
              </option>
              <option data-svg-code="ddk" value="ddk">
                Duel Decks: Sorin vs. Tibalt (DDK)
              </option>
              <option data-svg-code="ddj" value="ddj">
                Duel Decks: Izzet vs. Golgari (DDJ)
              </option>
              <option data-svg-code="ddi" value="ddi">
                Duel Decks: Venser vs. Koth (DDI)
              </option>
              <option data-svg-code="ddh" value="ddh">
                Duel Decks: Ajani vs. Nicol Bolas (DDH)
              </option>
              <option data-svg-code="td2" value="td2">
                Duel Decks: Mirrodin Pure vs. New Phyrexia (TD2)
              </option>
              <option data-svg-code="ddg" value="ddg">
                Duel Decks: Knights vs. Dragons (DDG)
              </option>
              <option data-svg-code="ddf" value="ddf">
                Duel Decks: Elspeth vs. Tezzeret (DDF)
              </option>
              <option data-svg-code="dde" value="dde">
                Duel Decks: Phyrexia vs. the Coalition (DDE)
              </option>
              <option data-svg-code="ddd" value="ddd">
                Duel Decks: Garruk vs. Liliana (DDD)
              </option>
              <option data-svg-code="ddc" value="ddc">
                Duel Decks: Divine vs. Demonic (DDC)
              </option>
              <option data-svg-code="dd2" value="dd2">
                Duel Decks: Jace vs. Chandra (DD2)
              </option>
              <option data-svg-code="dd1" value="dd1">
                Duel Decks: Elves vs. Goblins (DD1)
              </option>
            </optgroup>
            <optgroup label="Archenemy">
              <option data-svg-code="e01" value="oe01">
                Archenemy: Nicol Bolas Schemes (OE01)
              </option>
              <option data-svg-code="e01" value="e01">
                Archenemy: Nicol Bolas (E01)
              </option>
              <option data-svg-code="arc" value="oarc">
                Archenemy Schemes (OARC)
              </option>
              <option data-svg-code="arc" value="arc">
                Archenemy (ARC)
              </option>
              <option data-svg-code="dci" value="parc">
                Promotional Schemes (PARC)
              </option>
            </optgroup>
            <optgroup label="Box">
              <option data-svg-code="star" value="slu">
                Secret Lair: Ultimate Edition (SLU)
              </option>
              <option data-svg-code="ha1" value="ha3">
                Historic Anthology 3 (HA3)
              </option>
              <option data-svg-code="ha1" value="ha2">
                Historic Anthology 2 (HA2)
              </option>
              <option data-svg-code="ha1" value="ha1">
                Historic Anthology 1 (HA1)
              </option>
              <option data-svg-code="gn2" value="gn2">
                Game Night 2019 (GN2)
              </option>
              <option data-svg-code="rna" value="gk2">
                RNA Guild Kit (GK2)
              </option>
              <option data-svg-code="m19" value="g18">
                M19 Gift Pack (G18)
              </option>
              <option data-svg-code="gnt" value="gnt">
                Game Night (GNT)
              </option>
              <option data-svg-code="grn" value="gk1">
                GRN Guild Kit (GK1)
              </option>
              <option data-svg-code="e02" value="e02">
                Explorers of Ixalan (E02)
              </option>
              <option data-svg-code="star" value="g17">
                2017 Gift Pack (G17)
              </option>
              <option data-svg-code="md1" value="md1">
                Modern Event Deck 2014 (MD1)
              </option>
              <option data-svg-code="psal" value="ps11">
                Salvat 2011 (PS11)
              </option>
              <option data-svg-code="td0" value="td0">
                Magic Online Theme Decks (TD0)
              </option>
              <option data-svg-code="dpa" value="dpa">
                Duels of the Planeswalkers (DPA)
              </option>
              <option data-svg-code="default" value="cst">
                Coldsnap Theme Decks (CST)
              </option>
              <option data-svg-code="phuk" value="phuk">
                Hachette UK (PHUK)
              </option>
              <option data-svg-code="phuk" value="psal">
                Salvat 2005 (PSAL)
              </option>
              <option data-svg-code="dkm" value="dkm">
                Deckmasters (DKM)
              </option>
              <option data-svg-code="btd" value="btd">
                Beatdown Box Set (BTD)
              </option>
              <option data-svg-code="brb" value="brb">
                Battle Royale Box Set (BRB)
              </option>
              <option data-svg-code="ath" value="ath">
                Anthologies (ATH)
              </option>
              <option data-svg-code="vis" value="mgb">
                Multiverse Gift Box (MGB)
              </option>
              <option data-svg-code="default" value="rqs">
                Rivals Quick Start Set (RQS)
              </option>
            </optgroup>
            <optgroup label="Commander">
              <option data-svg-code="c20" value="c20">
                Commander 2020 (C20)
              </option>
              <option data-svg-code="c19" value="c19">
                Commander 2019 (C19)
              </option>
              <option data-svg-code="c18" value="c18">
                Commander 2018 (C18)
              </option>
              <option data-svg-code="cm2" value="cm2">
                Commander Anthology Volume II (CM2)
              </option>
              <option data-svg-code="c17" value="c17">
                Commander 2017 (C17)
              </option>
              <option data-svg-code="cma" value="cma">
                Commander Anthology (CMA)
              </option>
              <option data-svg-code="c16" value="c16">
                Commander 2016 (C16)
              </option>
              <option data-svg-code="c15" value="c15">
                Commander 2015 (C15)
              </option>
              <option data-svg-code="c14" value="c14">
                Commander 2014 (C14)
              </option>
              <option data-svg-code="c13" value="c13">
                Commander 2013 (C13)
              </option>
              <option data-svg-code="cm1" value="cm1">
                Commander's Arsenal (CM1)
              </option>
              <option data-svg-code="cmd" value="cmd">
                Commander 2011 (CMD)
              </option>
            </optgroup>
            <optgroup label="From The Vault">
              <option data-svg-code="v17" value="v17">
                From the Vault: Transform (V17)
              </option>
              <option data-svg-code="v16" value="v16">
                From the Vault: Lore (V16)
              </option>
              <option data-svg-code="v15" value="v15">
                From the Vault: Angels (V15)
              </option>
              <option data-svg-code="v14" value="v14">
                From the Vault: Annihilation (V14)
              </option>
              <option data-svg-code="v13" value="v13">
                From the Vault: Twenty (V13)
              </option>
              <option data-svg-code="v12" value="v12">
                From the Vault: Realms (V12)
              </option>
              <option data-svg-code="v11" value="v11">
                From the Vault: Legends (V11)
              </option>
              <option data-svg-code="v10" value="v10">
                From the Vault: Relics (V10)
              </option>
              <option data-svg-code="v09" value="v09">
                From the Vault: Exiled (V09)
              </option>
              <option data-svg-code="drb" value="drb">
                From the Vault: Dragons (DRB)
              </option>
            </optgroup>
            <optgroup label="Funny">
              <option data-svg-code="und" value="und">
                Unsanctioned (UND)
              </option>
              <option data-svg-code="planeswalker" value="cmb1">
                Mystery Booster Playtest Cards (CMB1)
              </option>
              <option data-svg-code="ptg" value="ptg">
                Ponies: The Galloping (PTG)
              </option>
              <option data-svg-code="star" value="htr18">
                Heroes of the Realm 2018 (HTR18)
              </option>
              <option data-svg-code="star" value="htr17">
                2017 Heroes of the Realm (HTR17)
              </option>
              <option data-svg-code="ust" value="ust">
                Unstable (UST)
              </option>
              <option data-svg-code="h17" value="h17">
                HasCon 2017 (H17)
              </option>
              <option data-svg-code="star" value="hho">
                Happy Holidays (HHO)
              </option>
              <option data-svg-code="unh" value="unh">
                Unhinged (UNH)
              </option>
              <option data-svg-code="ugl" value="ugl">
                Unglued (UGL)
              </option>
            </optgroup>
            <optgroup label="Masterpiece">
              <option data-svg-code="uma" value="puma">
                Ultimate Box Topper (PUMA)
              </option>
              <option data-svg-code="med" value="med">
                Mythic Edition (MED)
              </option>
              <option data-svg-code="mp2" value="mp2">
                Amonkhet Invocations (MP2)
              </option>
              <option data-svg-code="mps" value="mps">
                Kaladesh Inventions (MPS)
              </option>
              <option data-svg-code="exp" value="exp">
                Zendikar Expeditions (EXP)
              </option>
            </optgroup>
            <optgroup label="Memorabilia">
              <option data-svg-code="c19" value="oc19">
                Commander 2019 Oversized (OC19)
              </option>
              <option data-svg-code="mh1" value="amh1">
                Modern Horizons Art Series (AMH1)
              </option>
              <option data-svg-code="c18" value="oc18">
                Commander 2018 Oversized (OC18)
              </option>
              <option data-svg-code="star" value="htr">
                2016 Heroes of the Realm (HTR)
              </option>
              <option data-svg-code="c17" value="oc17">
                Commander 2017 Oversized (OC17)
              </option>
              <option data-svg-code="c16" value="oc16">
                Commander 2016 Oversized (OC16)
              </option>
              <option data-svg-code="c15" value="oc15">
                Commander 2015 Oversized (OC15)
              </option>
              <option data-svg-code="c14" value="oc14">
                Commander 2014 Oversized (OC14)
              </option>
              <option data-svg-code="m15" value="ppc1">
                M15 Prerelease Challenge (PPC1)
              </option>
              <option data-svg-code="bng" value="thp2">
                Born of the Gods Hero's Path (THP2)
              </option>
              <option data-svg-code="c13" value="oc13">
                Commander 2013 Oversized (OC13)
              </option>
              <option data-svg-code="ths" value="thp1">
                Theros Hero's Path (THP1)
              </option>
              <option data-svg-code="cm1" value="ocm1">
                Commander's Arsenal Oversized (OCM1)
              </option>
              <option data-svg-code="avr" value="phel">
                Open the Helvault (PHEL)
              </option>
              <option data-svg-code="cmd" value="ocmd">
                Commander 2011 Oversized (OCMD)
              </option>
              <option data-svg-code="cmd" value="pcmd">
                Commander 2011 Launch Party (PCMD)
              </option>
              <option data-svg-code="pmei" value="olgc">
                Legacy Championship (OLGC)
              </option>
              <option data-svg-code="default" value="wc04">
                World Championship Decks 2004 (WC04)
              </option>
              <option data-svg-code="default" value="wc03">
                World Championship Decks 2003 (WC03)
              </option>
              <option data-svg-code="pmei" value="ovnt">
                Vintage Championship (OVNT)
              </option>
              <option data-svg-code="default" value="wc02">
                World Championship Decks 2002 (WC02)
              </option>
              <option data-svg-code="default" value="wc01">
                World Championship Decks 2001 (WC01)
              </option>
              <option data-svg-code="default" value="wc00">
                World Championship Decks 2000 (WC00)
              </option>
              <option data-svg-code="default" value="wc99">
                World Championship Decks 1999 (WC99)
              </option>
              <option data-svg-code="default" value="wc98">
                World Championship Decks 1998 (WC98)
              </option>
              <option data-svg-code="default" value="wc97">
                World Championship Decks 1997 (WC97)
              </option>
              <option data-svg-code="default" value="pcel">
                Celebration Cards (PCEL)
              </option>
              <option data-svg-code="default" value="ptc">
                Pro Tour Collector Set (PTC)
              </option>
              <option data-svg-code="cei" value="cei">
                Intl. Collectors’ Edition (CEI)
              </option>
              <option data-svg-code="ced" value="ced">
                Collectors’ Edition (CED)
              </option>
            </optgroup>
            <optgroup label="Planechase">
              <option data-svg-code="pca" value="opca">
                Planechase Anthology Planes (OPCA)
              </option>
              <option data-svg-code="pca" value="pca">
                Planechase Anthology (PCA)
              </option>
              <option data-svg-code="pc2" value="opc2">
                Planechase 2012 Planes (OPC2)
              </option>
              <option data-svg-code="pc2" value="pc2">
                Planechase 2012 (PC2)
              </option>
              <option data-svg-code="hop" value="ohop">
                Planechase Planes (OHOP)
              </option>
              <option data-svg-code="hop" value="hop">
                Planechase (HOP)
              </option>
            </optgroup>
            <optgroup label="Premium Deck">
              <option data-svg-code="pd3" value="pd3">
                Premium Deck Series: Graveborn (PD3)
              </option>
              <option data-svg-code="pd2" value="pd2">
                Premium Deck Series: Fire and Lightning (PD2)
              </option>
              <option data-svg-code="h09" value="h09">
                Premium Deck Series: Slivers (H09)
              </option>
            </optgroup>
            <optgroup label="Promo">
              <option data-svg-code="default" value="piko">
                Ikoria: Lair of Behemoths Promos (PIKO)
              </option>
              <option data-svg-code="thb" value="pthb">
                Theros Beyond Death Promos (PTHB)
              </option>
              <option data-svg-code="star" value="j20">
                Judge Gift Cards 2020 (J20)
              </option>
              <option data-svg-code="star" value="pf20">
                MagicFest 2020 (PF20)
              </option>
              <option data-svg-code="star" value="psld">
                Secret Lair Drop Promos (PSLD)
              </option>
              <option data-svg-code="star" value="sld">
                Secret Lair Drop (SLD)
              </option>
              <option data-svg-code="eld" value="peld">
                Throne of Eldraine Promos (PELD)
              </option>
              <option data-svg-code="default" value="ps19">
                San Diego Comic-Con 2019 (PS19)
              </option>
              <option data-svg-code="star" value="ppp1">
                M20 Promo Packs (PPP1)
              </option>
              <option data-svg-code="m20" value="pm20">
                Core Set 2020 Promos (PM20)
              </option>
              <option data-svg-code="mh1" value="pmh1">
                Modern Horizons Promos (PMH1)
              </option>
              <option data-svg-code="war" value="pwar">
                War of the Spark Promos (PWAR)
              </option>
              <option data-svg-code="star" value="j19">
                Judge Gift Cards 2019 (J19)
              </option>
              <option data-svg-code="rna" value="prw2">
                RNA Ravnica Weekend (PRW2)
              </option>
              <option data-svg-code="rna" value="prna">
                Ravnica Allegiance Promos (PRNA)
              </option>
              <option data-svg-code="star" value="pf19">
                MagicFest 2019 (PF19)
              </option>
              <option data-svg-code="grn" value="pgrn">
                Guilds of Ravnica Promos (PGRN)
              </option>
              <option data-svg-code="grn" value="prwk">
                GRN Ravnica Weekend (PRWK)
              </option>
              <option data-svg-code="default" value="ps18">
                San Diego Comic-Con 2018 (PS18)
              </option>
              <option data-svg-code="mtga" value="pana">
                MTG Arena Promos (PANA)
              </option>
              <option data-svg-code="m19" value="pm19">
                Core Set 2019 Promos (PM19)
              </option>
              <option data-svg-code="star" value="pss3">
                M19 Standard Showdown (PSS3)
              </option>
              <option data-svg-code="bbd" value="pbbd">
                Battlebond Promos (PBBD)
              </option>
              <option data-svg-code="dom" value="pdom">
                Dominaria Promos (PDOM)
              </option>
              <option data-svg-code="star" value="plny">
                2018 Lunar New Year (PLNY)
              </option>
              <option data-svg-code="star" value="pnat">
                Nationals Promos (PNAT)
              </option>
              <option data-svg-code="rix" value="prix">
                Rivals of Ixalan Promos (PRIX)
              </option>
              <option data-svg-code="star" value="j18">
                Judge Gift Cards 2018 (J18)
              </option>
              <option data-svg-code="star" value="f18">
                Friday Night Magic 2018 (F18)
              </option>
              <option data-svg-code="xln" value="pxtc">
                XLN Treasure Chest (PXTC)
              </option>
              <option data-svg-code="ust" value="pust">
                Unstable Promos (PUST)
              </option>
              <option data-svg-code="xln" value="pxln">
                Ixalan Promos (PXLN)
              </option>
              <option data-svg-code="star" value="pss2">
                XLN Standard Showdown (PSS2)
              </option>
              <option data-svg-code="default" value="ps17">
                San Diego Comic-Con 2017 (PS17)
              </option>
              <option data-svg-code="hou" value="phou">
                Hour of Devastation Promos (PHOU)
              </option>
              <option data-svg-code="akh" value="pakh">
                Amonkhet Promos (PAKH)
              </option>
              <option data-svg-code="aer" value="paer">
                Aether Revolt Promos (PAER)
              </option>
              <option data-svg-code="star" value="j17">
                Judge Gift Cards 2017 (J17)
              </option>
              <option data-svg-code="star" value="f17">
                Friday Night Magic 2017 (F17)
              </option>
              <option data-svg-code="default" value="ps16">
                San Diego Comic-Con 2016 (PS16)
              </option>
              <option data-svg-code="kld" value="pkld">
                Kaladesh Promos (PKLD)
              </option>
              <option data-svg-code="emn" value="pemn">
                Eldritch Moon Promos (PEMN)
              </option>
              <option data-svg-code="soi" value="psoi">
                Shadows over Innistrad Promos (PSOI)
              </option>
              <option data-svg-code="ogw" value="pogw">
                Oath of the Gatewatch Promos (POGW)
              </option>
              <option data-svg-code="star" value="j16">
                Judge Gift Cards 2016 (J16)
              </option>
              <option data-svg-code="star" value="f16">
                Friday Night Magic 2016 (F16)
              </option>
              <option data-svg-code="bfz" value="pbfz">
                Battle for Zendikar Promos (PBFZ)
              </option>
              <option data-svg-code="bfz" value="pss1">
                BFZ Standard Series (PSS1)
              </option>
              <option data-svg-code="ori" value="pori">
                Magic Origins Promos (PORI)
              </option>
              <option data-svg-code="default" value="ps15">
                San Diego Comic-Con 2015 (PS15)
              </option>
              <option data-svg-code="dtk" value="ptkdf">
                Tarkir Dragonfury (PTKDF)
              </option>
              <option data-svg-code="dtk" value="pdtk">
                Dragons of Tarkir Promos (PDTK)
              </option>
              <option data-svg-code="frf" value="pfrf">
                Fate Reforged Promos (PFRF)
              </option>
              <option data-svg-code="frf" value="ugin">
                Ugin's Fate (UGIN)
              </option>
              <option data-svg-code="star" value="j15">
                Judge Gift Cards 2015 (J15)
              </option>
              <option data-svg-code="star" value="f15">
                Friday Night Magic 2015 (F15)
              </option>
              <option data-svg-code="ktk" value="pktk">
                Khans of Tarkir Promos (PKTK)
              </option>
              <option data-svg-code="m15" value="pm15">
                Magic 2015 Promos (PM15)
              </option>
              <option data-svg-code="default" value="ps14">
                San Diego Comic-Con 2014 (PS14)
              </option>
              <option data-svg-code="jou" value="thp3">
                Journey into Nyx Hero's Path (THP3)
              </option>
              <option data-svg-code="jou" value="pjou">
                Journey into Nyx Promos (PJOU)
              </option>
              <option data-svg-code="bng" value="pbng">
                Born of the Gods Promos (PBNG)
              </option>
              <option data-svg-code="m15" value="pdp14">
                Duels of the Planeswalkers 2014 Promos (PDP14)
              </option>
              <option data-svg-code="pidw" value="pi14">
                IDW Comics 2014 (PI14)
              </option>
              <option data-svg-code="star" value="f14">
                Friday Night Magic 2014 (F14)
              </option>
              <option data-svg-code="star" value="j14">
                Judge Gift Cards 2014 (J14)
              </option>
              <option data-svg-code="ths" value="pths">
                Theros Promos (PTHS)
              </option>
              <option data-svg-code="m14" value="pm14">
                Magic 2014 Promos (PM14)
              </option>
              <option data-svg-code="default" value="psdc">
                San Diego Comic-Con 2013 (PSDC)
              </option>
              <option data-svg-code="dgm" value="pdgm">
                Dragon's Maze Promos (PDGM)
              </option>
              <option data-svg-code="star" value="pwcq">
                World Magic Cup Qualifiers (PWCQ)
              </option>
              <option data-svg-code="gtc" value="pgtc">
                Gatecrash Promos (PGTC)
              </option>
              <option data-svg-code="m14" value="pdp13">
                Duels of the Planeswalkers 2013 Promos (PDP13)
              </option>
              <option data-svg-code="pidw" value="pi13">
                IDW Comics 2013 (PI13)
              </option>
              <option data-svg-code="star" value="j13">
                Judge Gift Cards 2013 (J13)
              </option>
              <option data-svg-code="star" value="f13">
                Friday Night Magic 2013 (F13)
              </option>
              <option data-svg-code="rtr" value="prtr">
                Return to Ravnica Promos (PRTR)
              </option>
              <option data-svg-code="m13" value="pm13">
                Magic 2013 Promos (PM13)
              </option>
              <option data-svg-code="avr" value="pavr">
                Avacyn Restored Promos (PAVR)
              </option>
              <option data-svg-code="dka" value="pdka">
                Dark Ascension Promos (PDKA)
              </option>
              <option data-svg-code="pidw" value="pidw">
                IDW Comics 2012 (PIDW)
              </option>
              <option data-svg-code="star" value="pwp12">
                Wizards Play Network 2012 (PWP12)
              </option>
              <option data-svg-code="m13" value="pdp12">
                Duels of the Planeswalkers 2012 Promos (PDP12)
              </option>
              <option data-svg-code="star" value="j12">
                Judge Gift Cards 2012 (J12)
              </option>
              <option data-svg-code="star" value="f12">
                Friday Night Magic 2012 (F12)
              </option>
              <option data-svg-code="isd" value="pisd">
                Innistrad Promos (PISD)
              </option>
              <option data-svg-code="m12" value="pm12">
                Magic 2012 Promos (PM12)
              </option>
              <option data-svg-code="nph" value="pnph">
                New Phyrexia Promos (PNPH)
              </option>
              <option data-svg-code="mbs" value="pmbs">
                Mirrodin Besieged Promos (PMBS)
              </option>
              <option data-svg-code="pmps" value="pmps11">
                Magic Premiere Shop 2011 (PMPS11)
              </option>
              <option data-svg-code="pmtg2" value="pdp11">
                Duels of the Planeswalkers 2011 Promos (PDP11)
              </option>
              <option data-svg-code="star" value="pwp11">
                Wizards Play Network 2011 (PWP11)
              </option>
              <option data-svg-code="default" value="p11">
                Magic Player Rewards 2011 (P11)
              </option>
              <option data-svg-code="default" value="g11">
                Judge Gift Cards 2011 (G11)
              </option>
              <option data-svg-code="star" value="f11">
                Friday Night Magic 2011 (F11)
              </option>
              <option data-svg-code="som" value="psom">
                Scars of Mirrodin Promos (PSOM)
              </option>
              <option data-svg-code="m11" value="pm11">
                Magic 2011 Promos (PM11)
              </option>
              <option data-svg-code="roe" value="proe">
                Rise of the Eldrazi Promos (PROE)
              </option>
              <option data-svg-code="wwk" value="pwwk">
                Worldwake Promos (PWWK)
              </option>
              <option data-svg-code="pmtg2" value="pdp10">
                Duels of the Planeswalkers 2010 Promos (PDP10)
              </option>
              <option data-svg-code="dci" value="pwp10">
                Wizards Play Network 2010 (PWP10)
              </option>
              <option data-svg-code="pmps" value="pmps10">
                Magic Premiere Shop 2010 (PMPS10)
              </option>
              <option data-svg-code="dci" value="g10">
                Judge Gift Cards 2010 (G10)
              </option>
              <option data-svg-code="default" value="p10">
                Magic Player Rewards 2010 (P10)
              </option>
              <option data-svg-code="dci" value="f10">
                Friday Night Magic 2010 (F10)
              </option>
              <option data-svg-code="zen" value="pzen">
                Zendikar Promos (PZEN)
              </option>
              <option data-svg-code="dci" value="phop">
                Promotional Planes (PHOP)
              </option>
              <option data-svg-code="m10" value="pm10">
                Magic 2010 Promos (PM10)
              </option>
              <option data-svg-code="star" value="purl">
                URL/Convention Promos (PURL)
              </option>
              <option data-svg-code="pbook" value="pbok">
                Miscellaneous Book Promos (PBOK)
              </option>
              <option data-svg-code="dci" value="pwp09">
                Wizards Play Network 2009 (PWP09)
              </option>
              <option data-svg-code="pxbox" value="pdtp">
                Duels of the Planeswalkers 2009 Promos (PDTP)
              </option>
              <option data-svg-code="pmps" value="pmps09">
                Magic Premiere Shop 2009 (PMPS09)
              </option>
              <option data-svg-code="dci" value="g09">
                Judge Gift Cards 2009 (G09)
              </option>
              <option data-svg-code="default" value="p09">
                Magic Player Rewards 2009 (P09)
              </option>
              <option data-svg-code="dci" value="f09">
                Friday Night Magic 2009 (F09)
              </option>
              <option data-svg-code="dci" value="pwpn">
                Wizards Play Network 2008 (PWPN)
              </option>
              <option data-svg-code="default" value="p15a">
                15th Anniversary Cards (P15A)
              </option>
              <option data-svg-code="default" value="plpa">
                Launch Parties (PLPA)
              </option>
              <option data-svg-code="pmps" value="pmps08">
                Magic Premiere Shop 2008 (PMPS08)
              </option>
              <option data-svg-code="dci" value="pg08">
                Gateway 2008 (PG08)
              </option>
              <option data-svg-code="dci" value="g08">
                Judge Gift Cards 2008 (G08)
              </option>
              <option data-svg-code="default" value="p08">
                Magic Player Rewards 2008 (P08)
              </option>
              <option data-svg-code="dci" value="f08">
                Friday Night Magic 2008 (F08)
              </option>
              <option data-svg-code="10e" value="psum">
                Summer of Magic (PSUM)
              </option>
              <option data-svg-code="10e" value="p10e">
                Tenth Edition Promos (P10E)
              </option>
              <option data-svg-code="default" value="pgpx">
                Grand Prix Promos (PGPX)
              </option>
              <option data-svg-code="star" value="ppro">
                Pro Tour Promos (PPRO)
              </option>
              <option data-svg-code="star" value="pres">
                Resale Promos (PRES)
              </option>
              <option data-svg-code="dci" value="pg07">
                Gateway 2007 (PG07)
              </option>
              <option data-svg-code="pmps" value="pmps07">
                Magic Premiere Shop 2007 (PMPS07)
              </option>
              <option data-svg-code="dci" value="f07">
                Friday Night Magic 2007 (F07)
              </option>
              <option data-svg-code="default" value="p07">
                Magic Player Rewards 2007 (P07)
              </option>
              <option data-svg-code="dci" value="g07">
                Judge Gift Cards 2007 (G07)
              </option>
              <option data-svg-code="default" value="pcmp">
                Champs and States (PCMP)
              </option>
              <option data-svg-code="parl" value="pal06">
                Arena League 2006 (PAL06)
              </option>
              <option data-svg-code="pmtg2" value="pmps06">
                Magic Premiere Shop 2006 (PMPS06)
              </option>
              <option data-svg-code="dci" value="pjas">
                Junior APAC Series (PJAS)
              </option>
              <option data-svg-code="dci" value="g06">
                Judge Gift Cards 2006 (G06)
              </option>
              <option data-svg-code="dci" value="p06">
                Magic Player Rewards 2006 (P06)
              </option>
              <option data-svg-code="dci" value="f06">
                Friday Night Magic 2006 (F06)
              </option>
              <option data-svg-code="dci" value="pgtw">
                Gateway 2006 (PGTW)
              </option>
              <option data-svg-code="dci" value="p2hg">
                Two-Headed Giant Tournament (P2HG)
              </option>
              <option data-svg-code="rav" value="pmps">
                Magic Premiere Shop 2005 (PMPS)
              </option>
              <option data-svg-code="parl" value="pal05">
                Arena League 2005 (PAL05)
              </option>
              <option data-svg-code="dci" value="pjse">
                Junior Series Europe (PJSE)
              </option>
              <option data-svg-code="dci" value="p05">
                Magic Player Rewards 2005 (P05)
              </option>
              <option data-svg-code="dci" value="g05">
                Judge Gift Cards 2005 (G05)
              </option>
              <option data-svg-code="dci" value="f05">
                Friday Night Magic 2005 (F05)
              </option>
              <option data-svg-code="parl" value="pal04">
                Arena League 2004 (PAL04)
              </option>
              <option data-svg-code="dci" value="p04">
                Magic Player Rewards 2004 (P04)
              </option>
              <option data-svg-code="dci" value="g04">
                Judge Gift Cards 2004 (G04)
              </option>
              <option data-svg-code="dci" value="f04">
                Friday Night Magic 2004 (F04)
              </option>
              <option data-svg-code="default" value="prel">
                Release Events (PREL)
              </option>
              <option data-svg-code="default" value="pjjt">
                Japan Junior Tournament (PJJT)
              </option>
              <option data-svg-code="parl" value="pal03">
                Arena League 2003 (PAL03)
              </option>
              <option data-svg-code="dci" value="p03">
                Magic Player Rewards 2003 (P03)
              </option>
              <option data-svg-code="dci" value="g03">
                Judge Gift Cards 2003 (G03)
              </option>
              <option data-svg-code="dci" value="f03">
                Friday Night Magic 2003 (F03)
              </option>
              <option data-svg-code="default" value="phj">
                Hobby Japan Promos (PHJ)
              </option>
              <option data-svg-code="mtgo" value="prm">
                Magic Online Promos (PRM)
              </option>
              <option data-svg-code="parl" value="pal02">
                Arena League 2002 (PAL02)
              </option>
              <option data-svg-code="dci" value="g02">
                Judge Gift Cards 2002 (G02)
              </option>
              <option data-svg-code="dci" value="pr2">
                Magic Player Rewards 2002 (PR2)
              </option>
              <option data-svg-code="dci" value="f02">
                Friday Night Magic 2002 (F02)
              </option>
              <option data-svg-code="parl2" value="pal01">
                Arena League 2001 (PAL01)
              </option>
              <option data-svg-code="dci" value="f01">
                Friday Night Magic 2001 (F01)
              </option>
              <option data-svg-code="dci" value="mpr">
                Magic Player Rewards 2001 (MPR)
              </option>
              <option data-svg-code="dci" value="g01">
                Judge Gift Cards 2001 (G01)
              </option>
              <option data-svg-code="peuro" value="pelp">
                European Land Program (PELP)
              </option>
              <option data-svg-code="parl2" value="pal00">
                Arena League 2000 (PAL00)
              </option>
              <option data-svg-code="dci" value="g00">
                Judge Gift Cards 2000 (G00)
              </option>
              <option data-svg-code="default" value="fnm">
                Friday Night Magic 2000 (FNM)
              </option>
              <option data-svg-code="dci" value="psus">
                Junior Super Series (PSUS)
              </option>
              <option data-svg-code="default" value="pwos">
                Wizards of the Coast Online Store (PWOS)
              </option>
              <option data-svg-code="default" value="pwor">
                World Championship Promos (PWOR)
              </option>
              <option data-svg-code="pgru" value="pgru">
                Guru (PGRU)
              </option>
              <option data-svg-code="usg" value="pal99">
                Arena League 1999 (PAL99)
              </option>
              <option data-svg-code="default" value="g99">
                Judge Gift Cards 1999 (G99)
              </option>
              <option data-svg-code="papac" value="palp">
                Asia Pacific Land Program (PALP)
              </option>
              <option data-svg-code="default" value="jgp">
                Judge Gift Cards 1998 (JGP)
              </option>
              <option data-svg-code="default" value="ppre">
                Prerelease Events (PPRE)
              </option>
              <option data-svg-code="default" value="pred">
                Redemption Program (PRED)
              </option>
              <option data-svg-code="parl" value="parl">
                Arena League 1996 (PARL)
              </option>
              <option data-svg-code="default" value="plgm">
                DCI Legend Membership (PLGM)
              </option>
              <option data-svg-code="pmei" value="pmei">
                Magazine Inserts (PMEI)
              </option>
              <option data-svg-code="pbook" value="phpr">
                HarperPrism Book Promos (PHPR)
              </option>
              <option data-svg-code="pdrc" value="pdrc">
                Dragon Con (PDRC)
              </option>
            </optgroup>
            <optgroup label="Spellbook">
              <option data-svg-code="default" value="ss3">
                Signature Spellbook: Chandra (SS3)
              </option>
              <option data-svg-code="ss2" value="ss2">
                Signature Spellbook: Gideon (SS2)
              </option>
              <option data-svg-code="ss1" value="ss1">
                Signature Spellbook: Jace (SS1)
              </option>
            </optgroup>
            <optgroup label="Starter">
              <option data-svg-code="mtga" value="ana">
                Arena New Player Experience (ANA)
              </option>
              <option data-svg-code="w17" value="w17">
                Welcome Deck 2017 (W17)
              </option>
              <option data-svg-code="w16" value="w16">
                Welcome Deck 2016 (W16)
              </option>
              <option data-svg-code="star" value="cp3">
                Magic Origins Clash Pack (CP3)
              </option>
              <option data-svg-code="star" value="cp2">
                Fate Reforged Clash Pack (CP2)
              </option>
              <option data-svg-code="star" value="cp1">
                Magic 2015 Clash Pack (CP1)
              </option>
              <option data-svg-code="s00" value="s00">
                Starter 2000 (S00)
              </option>
              <option data-svg-code="s99" value="s99">
                Starter 1999 (S99)
              </option>
              <option data-svg-code="ptk" value="ptk">
                Portal Three Kingdoms (PTK)
              </option>
              <option data-svg-code="p02" value="p02">
                Portal Second Age (P02)
              </option>
              <option data-svg-code="por" value="por">
                Portal (POR)
              </option>
              <option data-svg-code="por" value="ppod">
                Portal Demo Game (PPOD)
              </option>
              <option data-svg-code="x2ps" value="itp">
                Introductory Two-Player Set (ITP)
              </option>
            </optgroup>
            <optgroup label="Token">
              <option data-svg-code="iko" value="tiko">
                Ikoria: Lair of Behemoths Tokens (TIKO)
              </option>
              <option data-svg-code="c20" value="tc20">
                Commander 2020 Tokens (TC20)
              </option>
              <option data-svg-code="und" value="tund">
                Unsanctioned Tokens (TUND)
              </option>
              <option data-svg-code="thb" value="tthb">
                Theros Beyond Death Tokens (TTHB)
              </option>
              <option data-svg-code="gn2" value="tgn2">
                Game Night 2019 Tokens (TGN2)
              </option>
              <option data-svg-code="eld" value="teld">
                Throne of Eldraine Tokens (TELD)
              </option>
              <option data-svg-code="c19" value="tc19">
                Commander 2019 Tokens (TC19)
              </option>
              <option data-svg-code="m20" value="tm20">
                Core Set 2020 Tokens (TM20)
              </option>
              <option data-svg-code="mh1" value="tmh1">
                Modern Horizons Tokens (TMH1)
              </option>
              <option data-svg-code="war" value="twar">
                War of the Spark Tokens (TWAR)
              </option>
              <option data-svg-code="rna" value="tgk2">
                RNA Guild Kit Tokens (TGK2)
              </option>
              <option data-svg-code="rna" value="trna">
                Ravnica Allegiance Tokens (TRNA)
              </option>
              <option data-svg-code="uma" value="tuma">
                Ultimate Masters Tokens (TUMA)
              </option>
              <option data-svg-code="grn" value="tgk1">
                GRN Guild Kit Tokens (TGK1)
              </option>
              <option data-svg-code="grn" value="tgrn">
                Guilds of Ravnica Tokens (TGRN)
              </option>
              <option data-svg-code="med" value="tmed">
                Mythic Edition Tokens (TMED)
              </option>
              <option data-svg-code="c18" value="tc18">
                Commander 2018 Tokens (TC18)
              </option>
              <option data-svg-code="m19" value="tm19">
                Core Set 2019 Tokens (TM19)
              </option>
              <option data-svg-code="bbd" value="tbbd">
                Battlebond Tokens (TBBD)
              </option>
              <option data-svg-code="cm2" value="tcm2">
                Commander Anthology Volume II Tokens (TCM2)
              </option>
              <option data-svg-code="dom" value="tdom">
                Dominaria Tokens (TDOM)
              </option>
              <option data-svg-code="ddu" value="tddu">
                Duel Decks: Elves vs. Inventors Tokens (TDDU)
              </option>
              <option data-svg-code="a25" value="ta25">
                Masters 25 Tokens (TA25)
              </option>
              <option data-svg-code="rix" value="trix">
                Rivals of Ixalan Tokens (TRIX)
              </option>
              <option data-svg-code="ima" value="tima">
                Iconic Masters Tokens (TIMA)
              </option>
              <option data-svg-code="ust" value="tust">
                Unstable Tokens (TUST)
              </option>
              <option data-svg-code="ddt" value="tddt">
                Duel Decks: Merfolk vs. Goblins Tokens (TDDT)
              </option>
              <option data-svg-code="xln" value="txln">
                Ixalan Tokens (TXLN)
              </option>
              <option data-svg-code="e01" value="te01">
                Archenemy: Nicol Bolas Tokens (TE01)
              </option>
              <option data-svg-code="c17" value="tc17">
                Commander 2017 Tokens (TC17)
              </option>
              <option data-svg-code="hou" value="thou">
                Hour of Devastation Tokens (THOU)
              </option>
              <option data-svg-code="cma" value="tcma">
                Commander Anthology Tokens (TCMA)
              </option>
              <option data-svg-code="akh" value="takh">
                Amonkhet Tokens (TAKH)
              </option>
              <option data-svg-code="dds" value="tdds">
                Duel Decks: Mind vs. Might Tokens (TDDS)
              </option>
              <option data-svg-code="mm3" value="tmm3">
                Modern Masters 2017 Tokens (TMM3)
              </option>
              <option data-svg-code="aer" value="taer">
                Aether Revolt Tokens (TAER)
              </option>
              <option data-svg-code="default" value="l17">
                League Tokens 2017 (L17)
              </option>
              <option data-svg-code="default" value="tpca">
                Planechase Anthology Tokens (TPCA)
              </option>
              <option data-svg-code="c16" value="tc16">
                Commander 2016 Tokens (TC16)
              </option>
              <option data-svg-code="kld" value="tkld">
                Kaladesh Tokens (TKLD)
              </option>
              <option data-svg-code="cn2" value="tcn2">
                Conspiracy: Take the Crown Tokens (TCN2)
              </option>
              <option data-svg-code="emn" value="temn">
                Eldritch Moon Tokens (TEMN)
              </option>
              <option data-svg-code="ema" value="tema">
                Eternal Masters Tokens (TEMA)
              </option>
              <option data-svg-code="soi" value="tsoi">
                Shadows over Innistrad Tokens (TSOI)
              </option>
              <option data-svg-code="ogw" value="togw">
                Oath of the Gatewatch Tokens (TOGW)
              </option>
              <option data-svg-code="default" value="l16">
                League Tokens 2016 (L16)
              </option>
              <option data-svg-code="c15" value="tc15">
                Commander 2015 Tokens (TC15)
              </option>
              <option data-svg-code="bfz" value="tbfz">
                Battle for Zendikar Tokens (TBFZ)
              </option>
              <option data-svg-code="ori" value="tori">
                Magic Origins Tokens (TORI)
              </option>
              <option data-svg-code="mm2" value="tmm2">
                Modern Masters 2015 Tokens (TMM2)
              </option>
              <option data-svg-code="dtk" value="tdtk">
                Dragons of Tarkir Tokens (TDTK)
              </option>
              <option data-svg-code="frf" value="tfrf">
                Fate Reforged Tokens (TFRF)
              </option>
              <option data-svg-code="default" value="l15">
                League Tokens 2015 (L15)
              </option>
              <option data-svg-code="dd2" value="tjvc">
                Duel Decks Anthology: Jace vs. Chandra Tokens (TJVC)
              </option>
              <option data-svg-code="ddc" value="tdvd">
                Duel Decks Anthology: Divine vs. Demonic Tokens (TDVD)
              </option>
              <option data-svg-code="ddd" value="tgvl">
                Duel Decks Anthology: Garruk vs. Liliana Tokens (TGVL)
              </option>
              <option data-svg-code="dd1" value="tevg">
                Duel Decks Anthology: Elves vs. Goblins Tokens (TEVG)
              </option>
              <option data-svg-code="c14" value="tc14">
                Commander 2014 Tokens (TC14)
              </option>
              <option data-svg-code="ktk" value="tktk">
                Khans of Tarkir Tokens (TKTK)
              </option>
              <option data-svg-code="m15" value="tm15">
                Magic 2015 Tokens (TM15)
              </option>
              <option data-svg-code="cns" value="tcns">
                Conspiracy Tokens (TCNS)
              </option>
              <option data-svg-code="md1" value="tmd1">
                Modern Event Deck 2014 Tokens (TMD1)
              </option>
              <option data-svg-code="jou" value="tdag">
                Defeat a God (TDAG)
              </option>
              <option data-svg-code="jou" value="tjou">
                Journey into Nyx Tokens (TJOU)
              </option>
              <option data-svg-code="ddm" value="tddm">
                Duel Decks: Jace vs. Vraska Tokens (TDDM)
              </option>
              <option data-svg-code="bng" value="tbth">
                Battle the Horde (TBTH)
              </option>
              <option data-svg-code="bng" value="tbng">
                Born of the Gods Tokens (TBNG)
              </option>
              <option data-svg-code="default" value="l14">
                League Tokens 2014 (L14)
              </option>
              <option data-svg-code="ths" value="tfth">
                Face the Hydra (TFTH)
              </option>
              <option data-svg-code="ths" value="tths">
                Theros Tokens (TTHS)
              </option>
              <option data-svg-code="ddl" value="tddl">
                Duel Decks: Heroes vs. Monsters Tokens (TDDL)
              </option>
              <option data-svg-code="m14" value="tm14">
                Magic 2014 Tokens (TM14)
              </option>
              <option data-svg-code="mma" value="tmma">
                Modern Masters Tokens (TMMA)
              </option>
              <option data-svg-code="dgm" value="tdgm">
                Dragon's Maze Tokens (TDGM)
              </option>
              <option data-svg-code="ddk" value="tddk">
                Duel Decks: Sorin vs. Tibalt Tokens (TDDK)
              </option>
              <option data-svg-code="gtc" value="tgtc">
                Gatecrash Tokens (TGTC)
              </option>
              <option data-svg-code="default" value="l13">
                League Tokens 2013 (L13)
              </option>
              <option data-svg-code="rtr" value="trtr">
                Return to Ravnica Tokens (TRTR)
              </option>
              <option data-svg-code="ddj" value="tddj">
                Duel Decks: Izzet vs. Golgari Tokens (TDDJ)
              </option>
              <option data-svg-code="m13" value="tm13">
                Magic 2013 Tokens (TM13)
              </option>
              <option data-svg-code="avr" value="tavr">
                Avacyn Restored Tokens (TAVR)
              </option>
              <option data-svg-code="ddi" value="tddi">
                Duel Decks: Venser vs. Koth Tokens (TDDI)
              </option>
              <option data-svg-code="dka" value="tdka">
                Dark Ascension Tokens (TDKA)
              </option>
              <option data-svg-code="default" value="l12">
                League Tokens 2012 (L12)
              </option>
              <option data-svg-code="isd" value="tisd">
                Innistrad Tokens (TISD)
              </option>
              <option data-svg-code="ddh" value="tddh">
                Duel Decks: Ajani vs. Nicol Bolas Tokens (TDDH)
              </option>
              <option data-svg-code="m12" value="tm12">
                Magic 2012 Tokens (TM12)
              </option>
              <option data-svg-code="nph" value="tnph">
                New Phyrexia Tokens (TNPH)
              </option>
              <option data-svg-code="ddg" value="tddg">
                Duel Decks: Knights vs. Dragons Tokens (TDDG)
              </option>
              <option data-svg-code="mbs" value="tmbs">
                Mirrodin Besieged Tokens (TMBS)
              </option>
              <option data-svg-code="som" value="tsom">
                Scars of Mirrodin Tokens (TSOM)
              </option>
              <option data-svg-code="ddf" value="tddf">
                Duel Decks: Elspeth vs. Tezzeret Tokens (TDDF)
              </option>
              <option data-svg-code="m11" value="tm11">
                Magic 2011 Tokens (TM11)
              </option>
              <option data-svg-code="roe" value="troe">
                Rise of the Eldrazi Tokens (TROE)
              </option>
              <option data-svg-code="dde" value="tdde">
                Duel Decks: Phyrexia vs. the Coalition Tokens (TDDE)
              </option>
              <option data-svg-code="wwk" value="twwk">
                Worldwake Tokens (TWWK)
              </option>
              <option data-svg-code="ddd" value="tddd">
                Duel Decks: Garruk vs. Liliana Tokens (TDDD)
              </option>
              <option data-svg-code="zen" value="tzen">
                Zendikar Tokens (TZEN)
              </option>
              <option data-svg-code="m10" value="tm10">
                Magic 2010 Tokens (TM10)
              </option>
              <option data-svg-code="arb" value="tarb">
                Alara Reborn Tokens (TARB)
              </option>
              <option data-svg-code="ddc" value="tddc">
                Duel Decks: Divine vs. Demonic Tokens (TDDC)
              </option>
              <option data-svg-code="con" value="tcon">
                Conflux Tokens (TCON)
              </option>
              <option data-svg-code="dd2" value="tdd2">
                Duel Decks: Jace vs. Chandra Tokens (TDD2)
              </option>
              <option data-svg-code="ala" value="tala">
                Shards of Alara Tokens (TALA)
              </option>
              <option data-svg-code="eve" value="teve">
                Eventide Tokens (TEVE)
              </option>
              <option data-svg-code="shm" value="tshm">
                Shadowmoor Tokens (TSHM)
              </option>
              <option data-svg-code="mor" value="tmor">
                Morningtide Tokens (TMOR)
              </option>
              <option data-svg-code="dd1" value="tdd1">
                Duel Decks: Elves vs. Goblins Tokens (TDD1)
              </option>
              <option data-svg-code="lrw" value="tlrw">
                Lorwyn Tokens (TLRW)
              </option>
              <option data-svg-code="10e" value="t10e">
                Tenth Edition Tokens (T10E)
              </option>
              <option data-svg-code="csp" value="tcsp">
                Coldsnap Tokens (TCSP)
              </option>
              <option data-svg-code="default" value="tugl">
                Unglued Tokens (TUGL)
              </option>
            </optgroup>
            <optgroup label="Treasure Chest">
              <option data-svg-code="pz2" value="pz2">
                Treasure Chest (PZ2)
              </option>
              <option data-svg-code="pz1" value="pz1">
                Legendary Cube Prize Pack (PZ1)
              </option>
            </optgroup>
            <optgroup label="Vanguard">
              <option data-svg-code="mtgo" value="pmoa">
                Magic Online Avatars (PMOA)
              </option>
              <option data-svg-code="van" value="pvan">
                Vanguard Series (PVAN)
              </option>
            </optgroup>
          </select>
          <select id="blocks"
            defaultValue = {searchConditions && searchConditions.block?searchConditions.block:""}
          >
            <option value = "">Block</option>
            <option value="parl">Arena League</option>
            <option value="jgp">Judge Gift Cards</option>
            <option value="cmd">Commander</option>
            <option value="lea">Core Set</option>
            <option value="mpr">Magic Player Rewards</option>
            <option value="grn">Guilds of Ravnica</option>
            <option value="xln">Ixalan</option>
            <option value="akh">Amonkhet</option>
            <option value="kld">Kaladesh</option>
            <option value="soi">Shadows over Innistrad</option>
            <option value="bfz">Battle for Zendikar</option>
            <option value="ktk">Khans of Tarkir</option>
            <option value="ths">Theros</option>
            <option value="rtr">Return to Ravnica</option>
            <option value="isd">Innistrad</option>
            <option value="som">Scars of Mirrodin</option>
            <option value="zen">Zendikar</option>
            <option value="ala">Alara</option>
            <option value="shm">Shadowmoor</option>
            <option value="lrw">Lorwyn</option>
            <option value="tsp">Time Spiral</option>
            <option value="rav">Ravnica</option>
            <option value="chk">Kamigawa</option>
            <option value="mrd">Mirrodin</option>
            <option value="ons">Onslaught</option>
            <option value="ody">Odyssey</option>
            <option value="inv">Invasion</option>
            <option value="mmq">Masques</option>
            <option value="usg">Urza</option>
            <option value="tmp">Tempest</option>
            <option value="mir">Mirage</option>
            <option value="ice">Ice Age</option>
          </select>
          <p>Restrict cards based on their set, block, or group.</p>
        </div>
      </div>
      <div className="advancedsearch__section">
        <a className="advancedsearch__section--title">Rarity</a>
        <div className="advancedsearch__section--options">
          <div>
            <input type="checkbox" name="mythicrare" id="mythicrare" value = "m"
              defaultChecked = {searchConditions && searchConditions.rarity && searchConditions.rarity.split('').includes("m")?true:false}
            />
            <a>Mythic Rare</a>
            <input type="checkbox" name="rare" id="rare" value='r'
              defaultChecked = {searchConditions && searchConditions.rarity && searchConditions.rarity.split('').includes("r")?true:false}
            />
            <a>Rare</a>
          </div>
          <div>
            <input type="checkbox" name="uncommon" id="uncommon" value = "u"
              defaultChecked = {searchConditions && searchConditions.rarity && searchConditions.rarity.split('').includes("u")?true:false}
            />
            <a>Uncommon</a>
            <input type="checkbox" name="common" id="common" value = "c"
              defaultChecked = {searchConditions && searchConditions.rarity && searchConditions.rarity.split('').includes("c")?true:false}
            />
            <a>Common</a>
          </div>
          <p>Only return cards of the selected rarities.</p>
        </div>
      </div>
      <div className="advancedsearch__section">
        <a className="advancedsearch__section--title">Artist</a>
        <div className="advancedsearch__section--options">
          <input
            type="text"
            name="artist"
            id="artist"
            placeholder=" Any artist name, e.g. 'John Avon'"
            defaultValue = {searchConditions && searchConditions.artist?searchConditions.artist:""}
          />
          <p>Enter text that should be part of the artist name.</p>
        </div>
      </div>
      <div className="advancedsearch__section">
        <a className="advancedsearch__section--title">Flavor Text</a>
        <div className="advancedsearch__section--options">
          <input
            type="text"
            name="flavortext"
            id="flavortext"
            placeholder=" Any words in the flavor text, e.g. 'Chandra'"
            defaultValue = {searchConditions && searchConditions.flavor?searchConditions.flavor:""}
          />
          <p>
            Enter words that should appear in the flavor text. Word order doesn't
            matter.
          </p>
        </div>
      </div>
      <div className="advancedsearch__section">
        <a className="advancedsearch__section--title">Lore</a>
        <div className="advancedsearch__section--options">
          <input
            type="text"
            name="lore"
            id="lore"
            placeholder=" Any text in the card, especially names, e.g. 'Nicol Bolas'"
            defaultValue = {searchConditions && searchConditions.lore?searchConditions.lore:""}
          />
          <p>
            Enter names or words here and the system will search each part of the
            card for that word. Great for finding every card that mentions your
            favorite character or creature type.
          </p>
        </div>
      </div>
      <div className="advancedsearch__section">
        <a className="advancedsearch__section--title">Language</a>
        <div className="advancedsearch__section--options">
          <select id="languages"
            defaultValue = {searchConditions && searchConditions.language?searchConditions.language:""}
          >
            <option value="">Default</option>
            <option value="any">Any</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="pt">Portuguese</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="ru">Russian</option>
            <option value="zhs">Simplified Chinese</option>
            <option value="zht">Traditional Chinese</option>
            <option value="he">Hebrew</option>
            <option value="la">Latin</option>
            <option value="grc">Ancient Greek</option>
            <option value="ar">Arabic</option>
            <option value="sa">Sanskrit</option>
            <option value="px">Phyrexian</option>
          </select>
          <p>Specify a language to return results in.</p>
        </div>
      </div>
      <div className="advancedsearch__section">
        <a className="advancedsearch__section--title">Sort Method</a>
        <div className="advancedsearch__section--options">
          <select id = "order"
            defaultValue = {searchConditions && searchConditions.order?searchConditions.order:"name"}
          >
            <option value="name">Sort by Name</option>
            <option value="released">Sort by Release Date</option>
            <option value="set">Sort by Set/Number</option>
            <option value="rarity">Sort by Rarity</option>
            <option value="color">Sort by Color</option>
            <option value="cmc">Sort by CMC</option>
            <option value="power">Sort by Power</option>
            <option value="toughness">Sort by Toughness</option>
            <option value="edhrec">Sort by EDHREC Rank</option>
            <option value="artist">Sort by Artist Name</option>
          </select>
          <p />
        </div>
      </div>

      <div className="advancedsearch__section--buttoncontainer">
        <button type="submit" className="advancedsearch__section--button">
          Search with these options
        </button>
        <button className="advancedsearch__section--button" onClick = {clearForm}>
          Clear form
        </button>
      </div>

    </form>
  </section>
  
}