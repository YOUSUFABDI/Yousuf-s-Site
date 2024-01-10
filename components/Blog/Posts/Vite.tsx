import React from "react"
import BlogInro from "../../../layouts/blogs/BlogInro"
import SubTitle from "@/layouts/SubTitle"
import Paragraph from "../../../layouts/Paragraph"
import Box from "../../../layouts/blogs/Box"
import BlogTitle from "../../../layouts/blogs/BlogTitle"
import Avatar from "../../../layouts/Avatar"
import Wrapper from "../../../layouts/blogs/Wrapper"
import BlogContainer from "../../../layouts/blogs/BlogContainer"
import BlogHeader from "../../../layouts/blogs/BlogHeader"
import List from "../../../layouts/blogs/List"
import Note from "../../../layouts/Note"
import GoBack from "../../../layouts/GoBack"

const lists = (list: string) => <li>. {list}</li>

const Vite: React.FC = () => {
  return (
    <BlogContainer>
      <BlogHeader>
        <BlogTitle>
          Waa maxay Vite, aan ka hadalno waxa vite u yahay iyo fa'idadisa.
        </BlogTitle>
        <SubTitle>
          Tan waa sababta aan u jeclahay inaa vite isticmalo oo aan project
          weliba uga dabaqo
        </SubTitle>
      </BlogHeader>

      <BlogInro date="Nov 20, 2023" views={0} />

      <Wrapper>
        <Box>
          <BlogTitle>
            Waa maxay sababta build tools loo isticmalo ama “Why build tools
            matter?”
          </BlogTitle>
          <Paragraph>
            Aaladaha la dhiso ama “Build toolska” waxay noo ogoladaan inaan
            horumarino is-dhexgal isticmaale ama “user interfaces” oo adag oo
            leh walxo badan, kuwaas oo markii hore ahaa caqabad ama aan la heli
            karin in la abuuro iyadoo la adeegsanayo HTML, CSS, iyo JavaScript.
            Intaa waxaa dheer, waxay awood noo siinayaan inaan yareyno oo aan
            isku duubno codeka, ugu dambeyntiina kor u qaadaya waxtarka
            shabakadaha ama “web pageska”.
          </Paragraph>
          <Paragraph>
            Intaa waxaa dheer, qalab dhismuhu ama “build toolska” wuxuu noo
            ogolaanayaa inaan si otomaatig ah u samayno hawlaha sida ururinta
            codeka iyo soo saarista hantida ama “asset files”, taas oo
            badbaadisa wakhti iyo dadaal habka horumarinta ama “development
            process”. Guud ahaan, waxay u suurtogeliyaan horumariyayaashu ama
            “developerska” inay si sahlan u abuuraan complex web applications
            ama mareeg.
          </Paragraph>
        </Box>

        <Box>
          <BlogTitle>Waa maxay Vite</BlogTitle>
          <Avatar
            img="/images/vite_blog_img.png"
            customClasses="w-[1020px] rounded-md"
            width={1020}
            height={548}
          />
          <Paragraph>
            Si lama filaan ah, waxaa jiray koror degdeg ah oo ku saabsan
            korsashada Vite, kaas oo bilaabay isbeddel cusub oo ku saabsan
            deegaanka ee shabakadda ama “web framework”. Qaab dhismeedka ama
            “framework” sida Nuxt 3, SvelteKit, Astro, Refine, Hydrogen, iyo
            SolidStart hadda waxay isticmalaan Vite sidii ikhtiyaarkooda caadiga
            ah. Intaa waxaa dheer, kooxda React ayaa dhawaan joojisay taageerada
            Create React App-ka oo hadda waxay soo jeedinayaan isticmaalka
            qaab-dhismeedka create-vite template.
          </Paragraph>
          <Paragraph>
            Vite waa qalab dhisme ama “build tool” oo ujeedadiisu tahay in la
            abuuro mareegaha ama “website” casri ah oo leh khibrad horumarineed
            oo weyn, oo degdeg ah oo hufan, oo xoogga la saarayo bixinta khibrad
            horumarineed oo weyn
          </Paragraph>
          <Paragraph>
            Ereyga "Vite" wuxuu ka yimid ereyga Faransiiska ee "dhakhso." Waxaa
            caadi ahaan loo shaqeeyaa iyada oo la socota qaab-dhismeedka ama
            ‘frameworks’ sida Vue.js, React, ama Svelte, laakiin sidoo kale
            waxaa loo isticmaali karaa mashaariicda aan ku xirneyn qaab gaar ah
            ama ‘frameworks’ sida vanila Javascript.
          </Paragraph>
          <Paragraph>
            Ujeedada ugu muhiimsan ee Vite waa in la wanaajiyo habka horumarinta
            ama ‘development’ iyadoo la isticmaalayo ES module loading browserka
            dhexdiisa.
          </Paragraph>
          <Paragraph>
            Horumarka Vite wuxuu ku hormaray sii deynta v2.0, kaas oo ay ku
            jiraan wax ka bedello la taaban karo sida qaab dhismeed dib loo
            habeeyay iyo waxqabadka iyo hufnaanta la xoojiyay. Intaa waxa dheer,
            noocani waxa uu soo bandhigay hab cusub oo plugin ah kaas oo
            wanaajinaya habaynta iyo balaadhinta habka horumarinta, iyo sidoo
            kale taageerada CSS ee heerka sare ah.
          </Paragraph>
          <Paragraph>
            Iyadoo Vite 2.0 ay soo bandhigtay isbeddello la taaban karo, kooxda
            horumarinta ayaa si joogto ah u wanaajisay sifooyinka ama
            “featureska” jira iyagoo soo bandhigaya kuwa cusub oo la sii
            daanaayo.
          </Paragraph>
          <Paragraph>
            Si ka duwan qalabka caadiga ah ama ‘bundlers’ sida Webpack, Vite
            waxay isticmaashaa sifooyinka daalacashada casriga ah si ay ugu
            adeegaan ku-tiirsanaanta marka loo baahdo inta lagu jiro horumarinta
            ama “developmentiga”, taasoo keentay waqtiyo dhismo oo degdeg ah ama
            ‘quicker build times’ iyo khibrad horumarineed oo soo jiidasho leh.
          </Paragraph>
        </Box>

        <Box>
          <BlogTitle>Sida Vite u shaqeeyo</BlogTitle>
          <Paragraph>
            Vite waxaa loo sameeyay si loo hagaajiyo DX iyadoo la adeegsanayo
            awoodaha tignoolajiyada casriga casriga ah - sida modules-yada ES-ga
            iyo esbuild - si loo dedejiyo mashaariicda shabakada ee ballaaran
            iyo casriga ah ama “web projects”. Habkani waxa uu ka hadlayaa
            arrimaha xidhidhka iyo wakhtiyada sugitaanka ee la dheereeyey marka
            la bilaabayo adeegayaasha horumarinta ama “development servers”.
          </Paragraph>
          <Paragraph>
            Kahor soo ifbaxa qaybaha ES modules, horumariyayaashu ama
            “developerska” waxay isticmaaleen qaab-dhismeedka sida CommonJS iyo
            AMD, waxayna ku xidhnaayeen aaladaha adag sida webpack iyo Parcel si
            ay isugu xidhaan codeka. Habkani waxa uu ku lug leeyahay in la isku
            daro ilo kala duwan iyo hanti dheeraad ah oo lagu daro hal xidhmo oo
            JavaScript ah, kaas oo lagu fulin karo browserka iyada oo la
            adeegsanayo garaafka ku tiirsanaanta ama “dependency graph”.
          </Paragraph>
          <Paragraph>
            Nasiib darro, marka codsigu ku daro code badan iyo ku-tiirsanaan,
            habka xidhiddu wuxuu noqonayaa mid gaabis sii kordhaya. Tani waxay
            ka dhigaysaa bilawga adeegayaasha horumarinta si aan loo adkaysan
            karin oo gaabis ah oo xitaa saamaynaysa wareegga jawaab celinta
            beddelka hot module replacement (HMR) marka isbeddellada lagu
            sameeyo arjiga ama “applicationka”.
          </Paragraph>
          <Paragraph>
            Vite waxa ay yaraynaysaa dhibaatadan iyada oo adeegsanaysa
            modules-yada ES iyo browserka API-yada, taas oo u oggolaanaysa
            horumariyayaasha in ay si toos ah u soo dajiyaan una dhoofiyaan ama
            “import export” cutubyada iyada oo aan la helin hab isku xidhid
            adag. Waxaad la shaqayn kartaa qaybo gaar ah sidii faylal kala duwan
            oo aad uga tagi kartaa browserka si uu u maareeyo sida cutub kastaa
            uu u xidhiidho, taas oo ka dhigaysa habka horumarinta mid dhakhso
            badan oo dareen leh.
          </Paragraph>
        </Box>

        <Box>
          <BlogTitle>
            Astaamaha ugu muhiimsan ee Vite waxaa ka mid ah:
          </BlogTitle>
          <List>{lists("Fast Development Server")}</List>
          <List>{lists("Efficient Bundling")}</List>
          <List>{lists("Native ES Module Support")}</List>
          <List>{lists("Plugin System")}</List>
          <Paragraph>
            Guud ahaan, ujeedada Vite waa inay bixiso khibrad horumarineed ama ‘
            productive development’ oo xiiso leh oo hufan iyadoo la adeegsanayo
            awoodaha daalacashada casriga ah iyo hagaajinta habka dhismaha si
            kor loogu qaado xawaaraha iyo waxtarka marka la horumarinayo ama
            ‘during the develeopment’.
          </Paragraph>
          <Avatar
            img="/images/vite_blog_img2.png"
            customClasses="rounded-md"
            width={1020}
            height={548}
          />
        </Box>

        <Box>
          <BlogTitle>Waa maxay sababta loo isticmaalo Vite</BlogTitle>
          <Paragraph>
            Adeegga horumarka degdega ama “development server” ah ee Vite,
            dhisaha shaqsiyeeyay, iyo astaamo kale oo kala duwan ayaa u arka
            door lama huraan u ah horumariyayaal ama “developers” badan. Wax yar
            ayaanu ka dhex muuqan doonaa sifooyinkeeda muhiimka ah, laakiin ka
            hor, aynu eegno sababta aanu Vite ugu tixgelinayno dhinaca soo socda
            ee horumarka-dhamaadka hore ama “frontend development” iyo sababaha
            ay tahay inaad ka faa'iidaysato.
          </Paragraph>
          <Box>
            <BlogTitle>Fududeynta isticmaalka ama “Ease of use ”</BlogTitle>
            <Paragraph>
              Jiidda hore ee DX waxay diiradda saartaa sida ugu dhakhsaha badan
              ee horumariyahu u dhisi karo jawi horumarineed oo uu ku daro wax
              ka beddelka waqtiga-dhabta ah. In kasta oo ay jiraan
              bilow-mashruuc loogu talagalay habaynta degdegga ah,
              horumariyayaashu waxay had iyo jeer galiyaan wakhti aad u badan oo
              ay ku habeeyaan agabka horumarineed ee muhiimka ah.
            </Paragraph>
            <Paragraph>
              Vite waxay hubisaa dhammaan sanduuqyada marka ay timaaddo tan. Ma
              aha oo kaliya in ay la yimaadaan goobo dhisme oo horay loo
              habeeyey oo ka baxsan sanduuqa laakiin sidoo kale waxay bixisaa
              habayn-qaabayn yar iyo nidaam fiilo ballaaran oo ka kooban
              dhammaan qaybaha lagama maarmaanka u ah deegaanka horumarinta ama
              “development environment”.
            </Paragraph>
            <Paragraph>
              Waxaas oo dhan, oo ay weheliso taageerada TypeScript, JSX, iyo
              CSS, ayaa ka dhigaysa mid toos ah oo wax ku ool ah in la bilaabo
              jawi horumarineed ee codsiga shabakadda ama “web application
              development environment”.
            </Paragraph>
          </Box>
          <Box>
            <BlogTitle>Taageerada TypeScript</BlogTitle>
            <Paragraph>
              Sababta ay horumariyayaal badan ugu wareegeen Vite waa sababta oo
              ah taageeradeeda ku dhex dhisan ee TypeScript. Maadaama dejinta
              TypeScript ee mashruuca ay noqon karto mid adag, aalad si toos ah
              u soo dejisa oo soo saarta faylasha .ts waxay soo jiidan doontaa
              horumariyayaal badankooda.
            </Paragraph>
          </Box>
          <Box>
            <BlogTitle>Ku dhis hagaajinta kala qaybinta codeka CSS</BlogTitle>
            <Paragraph>
              Sida Vite u soo saarto gogol-xaadhaadyo async ah, waxay sidoo kale
              si toos ah u abuurtaa CSS-ga curiyayaasha fayl kasta oo gaar ah.
              Faylashaan waxaa lagu soo celiyaa qeybta la xiriirta iyadoo la
              isticmaalayo link tag marka la raro.
            </Paragraph>
            <Paragraph>
              Waxaan si faahfaahsan uga hadli doonaa sifadan mar dambe, laakiin
              dhab ahaantii, tani waxay hubinaysaa in CSS-ga la raro kaliya
              marka loo baahdo, taas oo hagaajin karta waxqabadka. Intaa waxaa
              dheer, Vite waxay hubisaa in qayb kasta oo CSS ah la raro ka hor
              inta aan la qiimeyn, sidaas darteed ka hortagga iftiinka cabsida
              leh ee waxyaabaha aan la habeynin.
            </Paragraph>
            <Paragraph>
              Kala qaybinta codeka CSS waxa loo dajiyay si toos ah. Marka
              sifadan karti loo yeesho, uma baahnid inaad ka walwasho CSS aan la
              isticmaalin oo xidhaysa dhuumaha codsigaaga ee wax soo saarka ama
              " application rendering pipeline in production".
            </Paragraph>
          </Box>
        </Box>

        <Box>
          <BlogTitle>Installation and setup of vite:</BlogTitle>
          <Note
            text="  Xusuusnow si aad u racdo habkan waxa qasab ah in computerkaga ku
              jiro nodejs"
          />
          <Box>
            <BlogTitle>Installation</BlogTitle>
            <List>
              {lists(
                "So furo terminalka, command prompt ama terminalka rabtid"
              )}
            </List>
            <List>{lists("Laso dag  vite ado isticmalaya npm")}</List>
            <Avatar
              img="/images/vite_instaltion_img1.png"
              customClasses="w-[296px]"
              width={296}
              height={44}
            />
          </Box>
          <Box>
            <BlogTitle>Create a Vite Project</BlogTitle>
            <Avatar
              img="/images/vite_instaltion_img2.png"
              customClasses="w-[414px]"
              width={414}
              height={177}
            />
            <List>{lists("Projectiga sida aad rabto kadhigo")}</List>
            <Avatar
              img="/images/vite_instaltion_img3.png"
              customClasses="w-[298px]"
              width={298}
              height={31}
            />
            <Avatar
              img="/images/vite_instaltion_img4.png"
              customClasses="w-[412px]"
              width={412}
              height={32}
            />
            <Avatar
              img="/images/vite_instaltion_img6.png"
              customClasses="w-[412px]"
              width={412}
              height={35}
            />
            <List>{lists("Projectiga waa diyaar")}</List>
            <Avatar
              img="/images/vite_instaltion_img5.png"
              customClasses="w-[1020px] rounded-md"
              width={1020}
              height={548}
            />
          </Box>
        </Box>

        <Box>
          <BlogTitle>
            Khibrad horumarineed ee vite ama “Development Experience of vite”
          </BlogTitle>
          <Paragraph>
            Waayo-aragnimadayda, waxaan dhammaystiray mashruucyo badan anigoo
            isticmaalaya qalabka dhismaha ama ‘build tools’. Iyadoo aan loo
            eegin haddii aan isticmaalo Grunt, Gulp, Rollup, ama webpack,
            mashaariicda muhiimka ah iyo kuwa qallafsan waxay igu qaadan doonaan
            maalin ama laba si aan u aasaaso oo aan u hubiyo isdhexgalka aan
            kala go 'lahayn ee dhammaan qalabyada iyo plugins. Ka dib, waxaan u
            hibayn doonaa wakhti dheeraad ah si aan u saxo cilad-baadhista, kor
            u qaadida tayaynta xidhmada, iyo hagaajinta muddada dhismahooda ama
            ‘build times’. Halkan, waxaan ku soo bandhigayaa dulmar ku saabsan
            khibradda horumarineed ee Vite.
          </Paragraph>
          <List>{lists("Instant HMR (Hot Module Replacement)")}</List>
          <List>{lists("Optimized Build Process")}</List>
          <List>{lists("Plugin System")}</List>
          <List>{lists("Support for TypeScript")}</List>
          <List>{lists("Single File Components")}</List>
          <List>{lists("Tree-Shaking")}</List>
          <List>{lists("Dependency Pre-Bundling")}</List>
          <List>{lists("Ecosystem and Community")}</List>
        </Box>

        <Box>
          <BlogTitle>Gabagabo</BlogTitle>
          <Paragraph>
            Guud ahaan, Vite waa mid aad u fiican! Waa wax qiimo leh oo ku soo
            biiray mowjadda hadda jirta ee horumarka tignoolajiyada. Sido kale
            Vite waa aaladda aan inta badan doorbido.
          </Paragraph>
          <Paragraph>
            Qalabkani kaliya ma fududeeyo habka qalabaynta wuxuuna dardargeliyaa
            horumarinta ama ‘development’ laakiin sidoo kale wuxuu ku daraa
            plugins badan oo lagama maarmaan u ah codsiyada adag ama
            ‘applications’.
          </Paragraph>
          <Paragraph>
            Ha iloobin inaad tixraacdo dukumeentiyada rasmiga ah iyo ilaha
            bulshada si aad u hesho macluumaadka ugu dambeeyay ee Vite
          </Paragraph>
        </Box>
      </Wrapper>

      <GoBack text="All blogs" link="blogs" />
    </BlogContainer>
  )
}

export default Vite
