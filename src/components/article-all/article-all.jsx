import React from "react";
import classes from "./article-all.module.scss";
import Avatar from "../../img/avatar.png";

const ArticleAll = () => {
  return (
    <div>
      <li className={classes.article_wrapper}>
        <div className={classes.article}>
          <div>
            <p className={classes.title}>Some article title</p>
            <button className={classes.button_like}></button>
            <p className={classes.num_like}>12</p>
            <div>
              <p className={classes.tag}>Tag1</p>
            </div>

            <p className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <p className={classes.user_name}>John Doe</p>
            <p className={classes.date}>March 5, 2020 </p>
          </div>
          <div>
            <img className={classes.avatar} src={Avatar} alt="avatar" />
          </div>
        </div>
        <p className={classes.text_all}>
          Est Ampyciden pater patent Amor saxa inpiger Lorem markdownum Stygias
          neque is referam fudi, breve per. Et Achaica tamen: nescia ista
          occupat, illum se ad potest humum et. Qua deos has fontibus Recens nec
          ferro responsaque dedere armenti opes momorderat pisce, vitataque et
          fugisse. Et iamque incipiens, qua huius suo omnes ne pendentia citus
          pedum. Quamvis pronuba Ulli labore facta. Io cervis non nosterque
          nullae, vides: aethere Delphice subit, tamen Romane ob cubilia
          Rhodopen calentes librata! Nihil populorum flava, inrita? Sit hic
          nunc, hoc formae Esse illo? Umeris eram similis, crudelem de est
          relicto ingemuit finiat Pelia uno cernunt Venus draconem, hic,
          Methymnaeae. 1. Clamoribus haesit tenentem iube Haec munera 2. Vincla
          venae 3. Paris includere etiam tamen 4. Superi te putria imagine
          Deianira 5. Tremore hoste Esse sed perstat capillis siqua
        </p>
      </li>
    </div>
  );
};

export default ArticleAll;
