<?php
/*
Template Name: Homepagina
*/
?>

<?php get_header(); ?>

<div class="hero-image home" data-parallax="scroll" data-image-src="<?php the_field('header_image');?>">
    <div class="content-hero">
        <h1><?php the_title();?></h1>
        <h2><?php the_field('sub_title');?></h2>
    </div>
</div>

<div class="news-container">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <h2>Laatste nieuws berichten</h2>
            </div>
            

                <?php
                   $args = array(
                       'post_type' => 'nieuws',
                       'post_status'=>"publish",
                       'orderby'=>"date",
                       'posts_per_page' => 3
                   );
                   $nieuws = new WP_Query( $args );
                   if( $nieuws->have_posts() ) {
                       while( $nieuws->have_posts() ) {
                           $nieuws->the_post();
                           ?>

                            <div class="col-xs-12 col-sm-4">
                                <div class="news-item">
                                    <div class="news-header">
                                       <div class="news-image" style="background-image:url('<?php the_field('nieuws_afbeelding');?>')"></div>
                                    </div>
                                    <div class="news-content">
                                        <h4 class="title"><?php the_title();?></h4>
                                        <div class="news-tekst">
                                           <p><?php
                                                $content = get_the_content( 'Read more' );
                                                echo apply_filters( 'the_content', $content );
                                              ?>
                                           </p>
                                        </div>
                                        <div class="button-container">
                                            <a href="<?php the_permalink();?>"><button class="btn-secondary">Lees verder</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           <?php
                       }
                   }
                   else {
                       echo 'er zijn geen nieuws berichten !';
                   }
                ?>
        </div>
    </div>
</div>

<div class="support-club-container">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-4">
                <img src="<?php bloginfo('template_directory');?>/images/supportersclub.jpg">
            </div>
            <div class="col-xs-12 col-md-8">
              <p>Supportersclub Ernst Dubbink telt momenteel rond de 100 leden. Het hoofddoel is om het team
                naar een zo hoog mogelijk niveau te brengen, dit doen ze hoofdzakelijk door financiële
                steun.</p><p> Ook lid worden? <strong>Meld je aan!</strong></p>
              <button class="btn" data-toggle="modal" data-target="#supportClub">Aanmelden</button>
            </div>
        </div>
    </div>
</div>

<div class="news-letter-container">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <i class="fa fa-envelope fa-5x" aria-hidden="true"></i>
                <h2>Schrijf je nu in voor de nieuwsbrief</h2>
                <button class="btn-white" data-toggle="modal" data-target="#nieuwsBrief">Inschrijven</button>
            </div>
        </div>
    </div>
</div>

<?php include ('logo-container.php');?>

<?php get_footer(); ?>
