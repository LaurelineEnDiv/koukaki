<article id="characters">
    <h3><span class="title">Les personnages</span></h3>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',
            );
            $characters_query = new WP_Query($args);
            
            while ($characters_query->have_posts()) {
                $characters_query->the_post();
                ?>
                <div class="swiper-slide">
                    <figure>
                        <?php echo get_the_post_thumbnail(get_the_ID(), 'full'); ?>
                        <figcaption><?php the_title(); ?></figcaption>
                    </figure>
                </div>
            <?php
            }
            wp_reset_postdata();
            ?>
        </div>
        <!-- Add Navigation -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</article>
