<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner">
            <div class="parallax-logo">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?>" alt="logo Fleurs d'oranger & chats errants" class="float">
            </div>
            <video autoplay loop class="background-video">
                <source src="<?php echo get_stylesheet_directory_uri() . '/assets/videos/Studio-Koukaki-video.mp4'; ?>" type="video/mp4">
            </video>
        </section>

        <section id="story" class="story">
            <h2><span class="title">L'histoire</span></h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <?php get_template_part('template-parts/characters-slider'); ?>
            <article id="place">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/clouds/big_cloud.png'; ?>" class="big-cloud">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/clouds/little_cloud.png'; ?>" class="little-cloud">
                <div>
                    <h3><span class="title">Le Lieu</span></h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>

            </article>
        </section>


        <section id="studio">
            <h2><span class="title">Studio</span> <span class="title koukaki">Koukaki</span></h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            </section>
        
        <?php get_template_part('template-parts/oscar'); ?>
        
    </main><!-- #main -->

<?php
get_footer();
