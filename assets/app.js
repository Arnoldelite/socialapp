/**
 * Created by arnoldelite on 2017-02-14.
 */
var app = angular.module('app',[]);
app.controller('PostsCtrl',function($scope, $http) {
    //$scope.postBody = null;
//        $scope.posts = [
//            {
//                username : 'dickeyxxx',
//                body: 'Node rules!'
//            },
//            {
//                username : 'jeffdickey',
//                body : 'trying out angular.js...'
//            }
//        ];
    $http.get('http://localhost:3000/api/posts')
        .success(function(posts){
            $scope.posts = posts;
         });
//       .error(function (err) {
//   // handle the error case (if you care)
// })


    $scope.addPost = function(){
        if($scope.postBody) {
            $http.post('/api/posts',{
                username: 'dickeyxxx',
                body: $scope.postBody
            }).success(function(post){
                $scope.posts.unshift(post);
                $scope.postBody = null;
            })
        }
    }
});
