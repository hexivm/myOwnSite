(function($){
  $(function(){
    $('.modal-trigger').leanModal();
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('.do-not-push').click(function(){
        console.log(`
                                            ,:
                                          ,' |
                                         /   :
                                      --'   /
                                      \\/ />/
                                      / /_\\
                                   __/   /
                                   )'-. /
                                   ./  :\\
                                    /.' '
                                  '/'
                                  +
                                 '
                               \`.
                           .-"-
                          (    |
                       . .-'  '.
                      ( (.   )8:
                  .'    / (_  )
                   _. :(.   )8P  \`
               .  (  \`-' (  \`.   .
                .  :  (   .a8a)
               /_\`( "a \`a. )"'
           (  (/  .  ' )=='
          (   (    )  .8"   +
            (\`'8a.( _(   (
         ..-. \`8P    ) \`  )  +
       -'   (      -ab:  )
     '    _  \`    (8P"Ya
   _(    (    )b  -\`.  ) +
  ( 8)  ( _.aP" _a   \( \   *
+  )/    (8P   (88    )  )
   (a:f   "     \`"       \`

        `);
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space