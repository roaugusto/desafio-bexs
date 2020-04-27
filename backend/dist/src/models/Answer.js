"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Question_1 = __importDefault(require("./Question"));
var Answer = /** @class */ (function () {
    function Answer() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Answer.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Answer.prototype, "text", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Answer.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column('int'),
        __metadata("design:type", Number)
    ], Answer.prototype, "likes", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Answer.prototype, "questionId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Question_1.default; }),
        typeorm_1.JoinColumn({ name: 'questionId' }),
        __metadata("design:type", Question_1.default)
    ], Answer.prototype, "question", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Answer.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Answer.prototype, "updatedAt", void 0);
    Answer = __decorate([
        typeorm_1.Entity('answers')
    ], Answer);
    return Answer;
}());
exports.default = Answer;
//# sourceMappingURL=Answer.js.map