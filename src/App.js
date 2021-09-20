import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "./App.css"

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Story Telling</Link>
          </li>
          <li>
            <Link to="/topics">Compétences</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      <div className="presentation">
        <h2>Willkommen ! Moi c'est Charles, et je recherche activement une alternance.</h2>
        <span className="image-ronde-bg"></span>
      </div>

      <div className="description">
        <p> J'apprécie développer des applications avec Javascript, nottament via son framework React ! </p>
        <p> Je possède également un bac+2 en communication, et des compétences en marketing.</p>

        <p> J'ai eu l'occasion de travailler sur AWS, configuration et installation sur un serveur ubuntu, ainsi que la mise en production</p>
        <p> Je développe actuellement sur WSL (Windows Subsystem for Linux), Je suis familié avec git, et ses commandes.</p>
        <p> J'ai également travailler dans un groupe en méthodologie agile. Je connais Trello / Slack / Figma etc... </p>

        <div>
          Ma Veille :
        <p> 
          J'éssaie souvent d'améliorer ma logique de développeur, sur des sites tel que HackerRank. Dans sa section problem solving.
          <br />
          Je m'intéresse également à la cybersécurité, afin de rester à l'écoute des possibles failles majeurs, et pour apprendre les bonnes pratiques.
          <br />
          J'apprécie le contenue Youtube autour de l'univers de l'Ui/UX, ainsi que le site awwwards, qui met en avant et récompense des sites originaux.
        </p>
        </div>

      </div>

      <div>
        Story Telling !
        <p> J'ai 14 ans, je découvre le web via mon option informatique au collège. Je met au point mon premier site internet sur jimdo. Sous la tutel d'un prof de techno qui s'entait la clope et le café.</p>
        <p> A 15 ans je créer mon premier forum sur xooit.com, découverte de l'html / css / php. Pour organiser les membres de ma guilde sur mon mmorpg de coeur, Guild Wars 2. </p>
        <p> Puis le Lycée ma éloigné de l'informatique. Filière Marketing, et une vie social</p>
        <p> Me voila en BTS Communication à l'isme de Nantes j'ai 20ans. Je me retrouve à étudier le web, et les technqiues marketing. Et très vite mon envie de créer des sites est de retour.</p>
        <p> Je décide de créer un intranet sur wordpress pour se partager les cours au seins de la classe, avec gestion du planning, et un espace pour discuter</p>
        <p> Je valide ensuite tranquillement ce BTS que j'étais vraiment impatient de terminer, car javais entre temps décider de me lancer dans l'informatique pour de bon.</p>
        <p> Je travail en Intérim afin de gagner mon pécule, je m'inscrit sur o'clock, pour suivre une formation de 6mois en distantiel, de développeur web. </p>
        <p>Je vais au bout de la formation, réalise un projet de groupe en méthodologie agile pendant 1mois, suivi d'une présentation sur twitch.</p>
        <p>Je commence alors a chercher du travail, et constate que ça va être plus compliqué que prévue de trouver un entreprise.</p>
        <p>Je décide donc de créer mon auto-entreprise et travail sur un projet wordpress, autour du cbd qui finira par être avorté, en cours de développement.</p>
        <p>Une Fois de plus je retourne a l'interim soulever des trucs, quand soudaint c'est officiel, o'clock annonce sa formation en alternance !</p>
        <p>Curieux et intrépide, près a tout pour m'échapper de la routine des usines. Je passe et réussie alors les tests d'assmibilité.</p>
        <p>Heureux de cette nouvelle perspéctive d'avenir, je me met alors en quête de trouver l'entreprise qui me donnera ma chance !</p>

      
      </div>



    </div>

  )

}

function About() {
  return <h2>Story telling</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/react`}>React</Link>
        </li>
        <li>
          <Link to={`${match.url}/nodejs`}>
            NodeJs
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}