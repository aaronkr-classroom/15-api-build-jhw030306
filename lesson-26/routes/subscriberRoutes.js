// routes/subscriberRoutes.js
"use strict";

/**
 * Listing 26.1 (p. 380)
 * @TODO: Subscriber 라우트의 subscriberRoutes.js로의 이동
 */
const router = require("express").Router(),
    subscribersController = require("../controllers/subscribersController");
/**
 * Subscribers
 */
router.get(
    "/subscribers",
    subscribersController.index,
    subscribersController.indexView
  ); // index 라우트 생성
  router.get("/subscribers/new", subscribersController.new); // 생성 폼을 보기 위한 요청 처리
  router.post(
    "/subscribers/create",
    subscribersController.create,
    subscribersController.redirectView
  ); // 생성 폼에서 받아온 데이터의 처리와 결과를 사용자 보기 페이지에 보여주기
  router.get(
    "/subscribers/:id",
    subscribersController.show,
    subscribersController.showView
  );
  router.get("/subscribers/:id/edit", subscribersController.edit); // viewing을 처리하기 위한 라우트 추가
  router.put(
    "/subscribers/:id/update",
    subscribersController.update,
    subscribersController.redirectView
  ); // 편집 폼에서 받아온 데이터의 처리와 결과를 사용자 보기 페이지에 보여주기
  router.delete(
    "/subscribers/:id/delete",
    subscribersController.delete,
    subscribersController.redirectView
  );

module.exports = router;